import React from 'react';
import { gql } from 'apollo-boost';
import { useRecipesQuery, withRecipes, RecipesProps } from '../generated/graphql';
import Spinner from './organisms/Spinner';
import { Icon, Card } from 'antd';
import { Link } from 'react-router-dom';
import Meta from 'antd/lib/card/Meta';
import styled from 'styled-components';
import { recipeFragment } from './Recipe';

export const recipesQuery = gql`
    query Recipes {
        recipe {
            ...RecipeFragment
        }
    }
    ${recipeFragment}
`;

const RecipesWithHOC: React.FC<RecipesProps> = ({ data }) => {
    if (!data || data.error) {
        return null;
    }
    if (data.loading) {
        return <Spinner />
    }
    return (
        <Container>
            {data.recipe && data.recipe.map(({ name, photo_url, description, id }) => (
                <StyledCard
                    key={id}
                    hoverable
                    cover={
                        <CardImage
                            alt={name}
                            src={photo_url || 'default'}
                        />
                    }
                    actions={[
                        <Icon type="setting" />,
                        <Icon type="edit" />,
                        <Icon type="ellipsis" />
                    ]}
                >
                    <Link
                        to={`/recipe/${id}/`}
                    >
                        <Meta title={name} description={description} />
                    </Link>
                </StyledCard>
            ))}
        </Container>
    );
};

export default withRecipes()(RecipesWithHOC);

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
