import { Carousel, Icon, Layout, PageHeader, Tabs } from 'antd';
import { gql } from 'apollo-boost';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { useRecipeQuery } from '../generated/graphql';
import Spinner from './organisms/Spinner';
const { Content } = Layout;
export const recipeFragment = gql`
    fragment RecipeFragment on recipe {
        id
        description
        name
        photo_url
        url
        cooking_time
        servings
        recipe_ingredients {
            ingredient {
                name
                unit
            }
            amount
        }
    }
`;
export const recipeQuery = gql`
    query Recipe($id: Int!) {
        recipe(where: { id: { _eq: $id } }, limit: 1) {
            ...RecipeFragment
        }
    }
    ${recipeFragment}
`;

export default ({
    match: {
        params: { id }
    },
    history
}: RouteComponentProps<{ id: string }>) => {
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
    const { name, photo_url, servings, cooking_time } = data.recipe[0];
    return (
        <>
            <Content>
                <PageHeader
                    onBack={() => history.goBack()}
                    title={'Recept'}
                    subTitle={name}
                    extra={
                        <>
                            <Icon
                                type="heart"
                                theme={'filled'}
                                style={{ color: 'red' }}
                            />
                        </>
                    }
                    footer={
                        <Tabs defaultActiveKey="1">
                            <Tabs.TabPane tab="Intro" key="1" />
                            <Tabs.TabPane tab="Ingrediënten" key="2" />
                            <Tabs.TabPane tab="Bereiden" key="3" />
                        </Tabs>
                    }
                />
                <Carousel style={{ minHeight: '300px' }}>
                    {/* todo: support multiple images */}
                    <div>
                        {photo_url && <Hero src={photo_url} alt={name} />}
                    </div>
                </Carousel>
                <Preview>
                    <Info>
                        Type
                        <span style={{ fontSize: '2em' }}>🍱</span>
                        <h3>Hoofdgerecht</h3>
                    </Info>
                    <Info>
                        Bereidingstijd
                        <Icon style={{ fontSize: '2em' }} type="clock-circle" />
                        <h3>
                            {cooking_time ? `${cooking_time} min.` : 'Onbekend'}
                        </h3>
                    </Info>
                    <Info>
                        Porties
                        <div style={{ fontSize: '2em' }}>👪</div>
                        <h3>{servings ? `${servings} porties` : 'Onbekend'}</h3>
                    </Info>
                    <Info>
                        Calories
                        <div style={{ fontSize: '2em' }}>👪</div>
                        <h3>{servings ? `${servings} porties` : 'Onbekend'}</h3>
                    </Info>
                </Preview>
            </Content>
        </>
    );
};

const Hero = styled.img`
    height: 30vh;
    width: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    padding: 1rem;
    width: 50%;
    height: 10rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background: white;
`;

const Preview = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;
