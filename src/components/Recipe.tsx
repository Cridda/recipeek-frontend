import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useRecipeQuery } from '../generated/graphql';
import Spinner from './organisms/Spinner';
import { PageHeader, Icon } from 'antd';
import { gql } from 'apollo-boost';

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
};
