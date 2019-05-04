import React from 'react';
import './App.css';
import gql from 'graphql-tag';
import { useRecipesQuery, useRecipeQuery } from './generated/graphql';
import { Card, Icon, Menu, PageHeader } from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink
} from 'react-router-dom';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import Spinner from './components/organisms/Spinner';

const { Meta } = Card;
export const recipeFragment = gql`
    fragment RecipeFragment on recipe {
        id
        description
        name
        photo_url
        url
        recipe_ingredients {
            ingredient {
                name
                unit
            }
            amount
        }
    }
`;
export const recipesQuery = gql`
    query Recipes {
        recipe {
            ...RecipeFragment
        }
    }
    ${recipeFragment}
`;

export const recipeQuery = gql`
    query Recipe($id: Int!) {
        recipe(where: { id: { _eq: $id } }) {
            ...RecipeFragment
        }
    }
    ${recipeFragment}
`;

const ShadowMenu = styled.div`
    width: 100vw;
    height: 3.2rem;
`;

const NavBar: React.FC = () => {
    return (
        <>
            <Header>
                <Menu mode="horizontal">
                    <Menu.Item>
                        <Link to="/">
                            <Icon type="home" />
                            Home
                        </Link>
                    </Menu.Item>

                    <Menu.Item>
                        <NavLink to="/recipe">
                            <Icon type="shop" />
                            Recepten
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/recipe">
                            <Icon type="search" />
                            Zoeken
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <ShadowMenu />
        </>
    );
};

const App: React.FC = () => {
    return (
        <>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/recipe/:id" component={Child} />
                    <Route path="/recipe" component={Recipes} />
                    <Route path="/" component={NavBar} />
                </Switch>
            </Router>
        </>
    );
};

const Recipes: React.FC = () => {
    const { data, error, loading } = useRecipesQuery();
    if (error) {
        return null;
    }
    if (loading) {
        return <Spinner />;
    }
    if (!data) {
        return null;
    }

    return (
        <Container>
            {data.recipe.map(({ name, photo_url, description, id }) => (
                <StyledCard
                    key={id}
                    hoverable
                    cover={
                        <CardImage
                            alt={name}
                            src={
                                photo_url ||
                                'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                            }
                        />
                    }
                    actions={[
                        <Icon type="setting" />,
                        <Icon type="edit" />,
                        <Icon type="ellipsis" />
                    ]}
                >
                    <Link
                        to={`/recipe/${id}/${name
                            .toLowerCase()
                            .replace(' ', '-')}`}
                    >
                        <Meta title={name} description={description} />
                    </Link>
                </StyledCard>
            ))}
        </Container>
    );
};
function Child({
    match: {
        params: { id }
    },
    history
}: RouteComponentProps<{ id: string }>) {
    const { data, error, loading } = useRecipeQuery({
        variables: { id: Number(id) }
    });
    if (error) {
        return null;
    }
    if (loading) {
        return <Spinner />;
    }
    if (!data) {
        return null;
    }
    return (
        <>
            <PageHeader
                onBack={() => history.goBack()}
                title={'Recept'}
                subTitle={data.recipe[0].name}
                extra={
                    <Icon
                        type="heart"
                        theme={'filled'}
                        style={{ color: 'red' }}
                    />
                }
            />
        </>
    );
}
export default App;

const CardImage = styled.img`
    width: 100%;
    height: 20rem;
    object-fit: cover;
`;
const StyledCard = styled(Card)`
    width: calc(100vw - 1rem);
    margin-bottom: 1rem;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.header`
    position: fixed;
    z-index: 1;
    width: 100%;
`;
