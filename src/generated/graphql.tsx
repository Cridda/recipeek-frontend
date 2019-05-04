/* eslint-disable */
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = "ignore",
  /** update the row with the given values */
  Update = "update"
}

/** columns and relationships of "ingredient" */
export type Ingredient = {
  id: Scalars["Int"];
  name: Scalars["String"];
  /** An array relationship */
  recipe_ingredients: Array<Recipe_Ingredient>;
  /** An aggregated array relationship */
  recipe_ingredients_aggregate: Recipe_Ingredient_Aggregate;
  unit: Scalars["String"];
};

/** columns and relationships of "ingredient" */
export type IngredientRecipe_IngredientsArgs = {
  distinct_on?: Maybe<Array<Recipe_Ingredient_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Ingredient_Order_By>>;
  where?: Maybe<Recipe_Ingredient_Bool_Exp>;
};

/** columns and relationships of "ingredient" */
export type IngredientRecipe_Ingredients_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Ingredient_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Ingredient_Order_By>>;
  where?: Maybe<Recipe_Ingredient_Bool_Exp>;
};

/** aggregated selection of "ingredient" */
export type Ingredient_Aggregate = {
  aggregate?: Maybe<Ingredient_Aggregate_Fields>;
  nodes: Array<Ingredient>;
};

/** aggregate fields of "ingredient" */
export type Ingredient_Aggregate_Fields = {
  avg?: Maybe<Ingredient_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Ingredient_Max_Fields>;
  min?: Maybe<Ingredient_Min_Fields>;
  stddev?: Maybe<Ingredient_Stddev_Fields>;
  stddev_pop?: Maybe<Ingredient_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ingredient_Stddev_Samp_Fields>;
  sum?: Maybe<Ingredient_Sum_Fields>;
  var_pop?: Maybe<Ingredient_Var_Pop_Fields>;
  var_samp?: Maybe<Ingredient_Var_Samp_Fields>;
  variance?: Maybe<Ingredient_Variance_Fields>;
};

/** aggregate fields of "ingredient" */
export type Ingredient_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Ingredient_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "ingredient" */
export type Ingredient_Aggregate_Order_By = {
  avg?: Maybe<Ingredient_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Ingredient_Max_Order_By>;
  min?: Maybe<Ingredient_Min_Order_By>;
  stddev?: Maybe<Ingredient_Stddev_Order_By>;
  stddev_pop?: Maybe<Ingredient_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Ingredient_Stddev_Samp_Order_By>;
  sum?: Maybe<Ingredient_Sum_Order_By>;
  var_pop?: Maybe<Ingredient_Var_Pop_Order_By>;
  var_samp?: Maybe<Ingredient_Var_Samp_Order_By>;
  variance?: Maybe<Ingredient_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ingredient" */
export type Ingredient_Arr_Rel_Insert_Input = {
  data: Array<Ingredient_Insert_Input>;
  on_conflict?: Maybe<Ingredient_On_Conflict>;
};

/** aggregate avg on columns */
export type Ingredient_Avg_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "ingredient" */
export type Ingredient_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ingredient". All fields are combined with a logical 'AND'. */
export type Ingredient_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Ingredient_Bool_Exp>>>;
  _not?: Maybe<Ingredient_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Ingredient_Bool_Exp>>>;
  id?: Maybe<Integer_Comparison_Exp>;
  name?: Maybe<Text_Comparison_Exp>;
  recipe_ingredients?: Maybe<Recipe_Ingredient_Bool_Exp>;
  unit?: Maybe<Text_Comparison_Exp>;
};

/** unique or primary key constraints on table "ingredient" */
export enum Ingredient_Constraint {
  /** unique or primary key constraint */
  IngredientNameKey = "ingredient_name_key",
  /** unique or primary key constraint */
  IngredientPkey = "ingredient_pkey"
}

/** input type for incrementing integer columne in table "ingredient" */
export type Ingredient_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "ingredient" */
export type Ingredient_Insert_Input = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  recipe_ingredients?: Maybe<Recipe_Ingredient_Arr_Rel_Insert_Input>;
  unit?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Ingredient_Max_Fields = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  unit?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "ingredient" */
export type Ingredient_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Ingredient_Min_Fields = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  unit?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "ingredient" */
export type Ingredient_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
};

/** response of any mutation on the table "ingredient" */
export type Ingredient_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Ingredient>;
};

/** input type for inserting object relation for remote table "ingredient" */
export type Ingredient_Obj_Rel_Insert_Input = {
  data: Ingredient_Insert_Input;
  on_conflict?: Maybe<Ingredient_On_Conflict>;
};

/** on conflict condition type for table "ingredient" */
export type Ingredient_On_Conflict = {
  constraint: Ingredient_Constraint;
  update_columns: Array<Ingredient_Update_Column>;
};

/** ordering options when selecting data from "ingredient" */
export type Ingredient_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  recipe_ingredients_aggregate?: Maybe<Recipe_Ingredient_Aggregate_Order_By>;
  unit?: Maybe<Order_By>;
};

/** select columns of table "ingredient" */
export enum Ingredient_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Unit = "unit"
}

/** input type for updating data in table "ingredient" */
export type Ingredient_Set_Input = {
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  unit?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Ingredient_Stddev_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "ingredient" */
export type Ingredient_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ingredient_Stddev_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "ingredient" */
export type Ingredient_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ingredient_Stddev_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "ingredient" */
export type Ingredient_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Ingredient_Sum_Fields = {
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "ingredient" */
export type Ingredient_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "ingredient" */
export enum Ingredient_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Unit = "unit"
}

/** aggregate var_pop on columns */
export type Ingredient_Var_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "ingredient" */
export type Ingredient_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ingredient_Var_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "ingredient" */
export type Ingredient_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Ingredient_Variance_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "ingredient" */
export type Ingredient_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** expression to compare columns of type integer. All fields are combined with logical 'AND'. */
export type Integer_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "ingredient" */
  delete_ingredient?: Maybe<Ingredient_Mutation_Response>;
  /** delete data from the table: "recipe" */
  delete_recipe?: Maybe<Recipe_Mutation_Response>;
  /** delete data from the table: "recipe_ingredient" */
  delete_recipe_ingredient?: Maybe<Recipe_Ingredient_Mutation_Response>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** insert data into the table: "ingredient" */
  insert_ingredient?: Maybe<Ingredient_Mutation_Response>;
  /** insert data into the table: "recipe" */
  insert_recipe?: Maybe<Recipe_Mutation_Response>;
  /** insert data into the table: "recipe_ingredient" */
  insert_recipe_ingredient?: Maybe<Recipe_Ingredient_Mutation_Response>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** update data of the table: "ingredient" */
  update_ingredient?: Maybe<Ingredient_Mutation_Response>;
  /** update data of the table: "recipe" */
  update_recipe?: Maybe<Recipe_Mutation_Response>;
  /** update data of the table: "recipe_ingredient" */
  update_recipe_ingredient?: Maybe<Recipe_Ingredient_Mutation_Response>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
};

/** mutation root */
export type Mutation_RootDelete_IngredientArgs = {
  where: Ingredient_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_RecipeArgs = {
  where: Recipe_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Recipe_IngredientArgs = {
  where: Recipe_Ingredient_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootInsert_IngredientArgs = {
  objects: Array<Ingredient_Insert_Input>;
  on_conflict?: Maybe<Ingredient_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_RecipeArgs = {
  objects: Array<Recipe_Insert_Input>;
  on_conflict?: Maybe<Recipe_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Recipe_IngredientArgs = {
  objects: Array<Recipe_Ingredient_Insert_Input>;
  on_conflict?: Maybe<Recipe_Ingredient_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_IngredientArgs = {
  _inc?: Maybe<Ingredient_Inc_Input>;
  _set?: Maybe<Ingredient_Set_Input>;
  where: Ingredient_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_RecipeArgs = {
  _inc?: Maybe<Recipe_Inc_Input>;
  _set?: Maybe<Recipe_Set_Input>;
  where: Recipe_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Recipe_IngredientArgs = {
  _inc?: Maybe<Recipe_Ingredient_Inc_Input>;
  _set?: Maybe<Recipe_Ingredient_Set_Input>;
  where: Recipe_Ingredient_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last"
}

/** query root */
export type Query_Root = {
  /** fetch data from the table: "ingredient" */
  ingredient: Array<Ingredient>;
  /** fetch aggregated fields from the table: "ingredient" */
  ingredient_aggregate: Ingredient_Aggregate;
  /** fetch data from the table: "ingredient" using primary key columns */
  ingredient_by_pk?: Maybe<Ingredient>;
  /** fetch data from the table: "recipe" */
  recipe: Array<Recipe>;
  /** fetch aggregated fields from the table: "recipe" */
  recipe_aggregate: Recipe_Aggregate;
  /** fetch data from the table: "recipe" using primary key columns */
  recipe_by_pk?: Maybe<Recipe>;
  /** fetch data from the table: "recipe_ingredient" */
  recipe_ingredient: Array<Recipe_Ingredient>;
  /** fetch aggregated fields from the table: "recipe_ingredient" */
  recipe_ingredient_aggregate: Recipe_Ingredient_Aggregate;
  /** fetch data from the table: "recipe_ingredient" using primary key columns */
  recipe_ingredient_by_pk?: Maybe<Recipe_Ingredient>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};

/** query root */
export type Query_RootIngredientArgs = {
  distinct_on?: Maybe<Array<Ingredient_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Ingredient_Order_By>>;
  where?: Maybe<Ingredient_Bool_Exp>;
};

/** query root */
export type Query_RootIngredient_AggregateArgs = {
  distinct_on?: Maybe<Array<Ingredient_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Ingredient_Order_By>>;
  where?: Maybe<Ingredient_Bool_Exp>;
};

/** query root */
export type Query_RootIngredient_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootRecipeArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};

/** query root */
export type Query_RootRecipe_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};

/** query root */
export type Query_RootRecipe_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootRecipe_IngredientArgs = {
  distinct_on?: Maybe<Array<Recipe_Ingredient_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Ingredient_Order_By>>;
  where?: Maybe<Recipe_Ingredient_Bool_Exp>;
};

/** query root */
export type Query_RootRecipe_Ingredient_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Ingredient_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Ingredient_Order_By>>;
  where?: Maybe<Recipe_Ingredient_Bool_Exp>;
};

/** query root */
export type Query_RootRecipe_Ingredient_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars["Int"];
};

/** columns and relationships of "recipe" */
export type Recipe = {
  cooking_time?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  name: Scalars["String"];
  photo_url?: Maybe<Scalars["String"]>;
  /** An array relationship */
  recipe_ingredients: Array<Recipe_Ingredient>;
  /** An aggregated array relationship */
  recipe_ingredients_aggregate: Recipe_Ingredient_Aggregate;
  servings?: Maybe<Scalars["Int"]>;
  steps?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  /** An object relationship */
  user: User;
  user_id: Scalars["Int"];
};

/** columns and relationships of "recipe" */
export type RecipeRecipe_IngredientsArgs = {
  distinct_on?: Maybe<Array<Recipe_Ingredient_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Ingredient_Order_By>>;
  where?: Maybe<Recipe_Ingredient_Bool_Exp>;
};

/** columns and relationships of "recipe" */
export type RecipeRecipe_Ingredients_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Ingredient_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Ingredient_Order_By>>;
  where?: Maybe<Recipe_Ingredient_Bool_Exp>;
};

/** aggregated selection of "recipe" */
export type Recipe_Aggregate = {
  aggregate?: Maybe<Recipe_Aggregate_Fields>;
  nodes: Array<Recipe>;
};

/** aggregate fields of "recipe" */
export type Recipe_Aggregate_Fields = {
  avg?: Maybe<Recipe_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Recipe_Max_Fields>;
  min?: Maybe<Recipe_Min_Fields>;
  stddev?: Maybe<Recipe_Stddev_Fields>;
  stddev_pop?: Maybe<Recipe_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Recipe_Stddev_Samp_Fields>;
  sum?: Maybe<Recipe_Sum_Fields>;
  var_pop?: Maybe<Recipe_Var_Pop_Fields>;
  var_samp?: Maybe<Recipe_Var_Samp_Fields>;
  variance?: Maybe<Recipe_Variance_Fields>;
};

/** aggregate fields of "recipe" */
export type Recipe_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Recipe_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "recipe" */
export type Recipe_Aggregate_Order_By = {
  avg?: Maybe<Recipe_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Recipe_Max_Order_By>;
  min?: Maybe<Recipe_Min_Order_By>;
  stddev?: Maybe<Recipe_Stddev_Order_By>;
  stddev_pop?: Maybe<Recipe_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Recipe_Stddev_Samp_Order_By>;
  sum?: Maybe<Recipe_Sum_Order_By>;
  var_pop?: Maybe<Recipe_Var_Pop_Order_By>;
  var_samp?: Maybe<Recipe_Var_Samp_Order_By>;
  variance?: Maybe<Recipe_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "recipe" */
export type Recipe_Arr_Rel_Insert_Input = {
  data: Array<Recipe_Insert_Input>;
  on_conflict?: Maybe<Recipe_On_Conflict>;
};

/** aggregate avg on columns */
export type Recipe_Avg_Fields = {
  cooking_time?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  servings?: Maybe<Scalars["Float"]>;
  user_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "recipe" */
export type Recipe_Avg_Order_By = {
  cooking_time?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  servings?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "recipe". All fields are combined with a logical 'AND'. */
export type Recipe_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Recipe_Bool_Exp>>>;
  _not?: Maybe<Recipe_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Recipe_Bool_Exp>>>;
  cooking_time?: Maybe<Integer_Comparison_Exp>;
  description?: Maybe<Text_Comparison_Exp>;
  id?: Maybe<Integer_Comparison_Exp>;
  name?: Maybe<Text_Comparison_Exp>;
  photo_url?: Maybe<Text_Comparison_Exp>;
  recipe_ingredients?: Maybe<Recipe_Ingredient_Bool_Exp>;
  servings?: Maybe<Integer_Comparison_Exp>;
  steps?: Maybe<Text_Comparison_Exp>;
  url?: Maybe<Text_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Integer_Comparison_Exp>;
};

/** unique or primary key constraints on table "recipe" */
export enum Recipe_Constraint {
  /** unique or primary key constraint */
  RecipePkey = "recipe_pkey"
}

/** input type for incrementing integer columne in table "recipe" */
export type Recipe_Inc_Input = {
  cooking_time?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  servings?: Maybe<Scalars["Int"]>;
  user_id?: Maybe<Scalars["Int"]>;
};

/** columns and relationships of "recipe_ingredient" */
export type Recipe_Ingredient = {
  amount?: Maybe<Scalars["Int"]>;
  id: Scalars["Int"];
  /** An object relationship */
  ingredient: Ingredient;
  ingredient_id: Scalars["Int"];
  /** An object relationship */
  recipe: Recipe;
  recipe_id: Scalars["Int"];
};

/** aggregated selection of "recipe_ingredient" */
export type Recipe_Ingredient_Aggregate = {
  aggregate?: Maybe<Recipe_Ingredient_Aggregate_Fields>;
  nodes: Array<Recipe_Ingredient>;
};

/** aggregate fields of "recipe_ingredient" */
export type Recipe_Ingredient_Aggregate_Fields = {
  avg?: Maybe<Recipe_Ingredient_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Recipe_Ingredient_Max_Fields>;
  min?: Maybe<Recipe_Ingredient_Min_Fields>;
  stddev?: Maybe<Recipe_Ingredient_Stddev_Fields>;
  stddev_pop?: Maybe<Recipe_Ingredient_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Recipe_Ingredient_Stddev_Samp_Fields>;
  sum?: Maybe<Recipe_Ingredient_Sum_Fields>;
  var_pop?: Maybe<Recipe_Ingredient_Var_Pop_Fields>;
  var_samp?: Maybe<Recipe_Ingredient_Var_Samp_Fields>;
  variance?: Maybe<Recipe_Ingredient_Variance_Fields>;
};

/** aggregate fields of "recipe_ingredient" */
export type Recipe_Ingredient_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Recipe_Ingredient_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "recipe_ingredient" */
export type Recipe_Ingredient_Aggregate_Order_By = {
  avg?: Maybe<Recipe_Ingredient_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Recipe_Ingredient_Max_Order_By>;
  min?: Maybe<Recipe_Ingredient_Min_Order_By>;
  stddev?: Maybe<Recipe_Ingredient_Stddev_Order_By>;
  stddev_pop?: Maybe<Recipe_Ingredient_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Recipe_Ingredient_Stddev_Samp_Order_By>;
  sum?: Maybe<Recipe_Ingredient_Sum_Order_By>;
  var_pop?: Maybe<Recipe_Ingredient_Var_Pop_Order_By>;
  var_samp?: Maybe<Recipe_Ingredient_Var_Samp_Order_By>;
  variance?: Maybe<Recipe_Ingredient_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "recipe_ingredient" */
export type Recipe_Ingredient_Arr_Rel_Insert_Input = {
  data: Array<Recipe_Ingredient_Insert_Input>;
  on_conflict?: Maybe<Recipe_Ingredient_On_Conflict>;
};

/** aggregate avg on columns */
export type Recipe_Ingredient_Avg_Fields = {
  amount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  ingredient_id?: Maybe<Scalars["Float"]>;
  recipe_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "recipe_ingredient" */
export type Recipe_Ingredient_Avg_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ingredient_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "recipe_ingredient". All fields are combined with a logical 'AND'. */
export type Recipe_Ingredient_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Recipe_Ingredient_Bool_Exp>>>;
  _not?: Maybe<Recipe_Ingredient_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Recipe_Ingredient_Bool_Exp>>>;
  amount?: Maybe<Integer_Comparison_Exp>;
  id?: Maybe<Integer_Comparison_Exp>;
  ingredient?: Maybe<Ingredient_Bool_Exp>;
  ingredient_id?: Maybe<Integer_Comparison_Exp>;
  recipe?: Maybe<Recipe_Bool_Exp>;
  recipe_id?: Maybe<Integer_Comparison_Exp>;
};

/** unique or primary key constraints on table "recipe_ingredient" */
export enum Recipe_Ingredient_Constraint {
  /** unique or primary key constraint */
  RecipeIngredientPkey = "recipe_ingredient_pkey"
}

/** input type for incrementing integer columne in table "recipe_ingredient" */
export type Recipe_Ingredient_Inc_Input = {
  amount?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  ingredient_id?: Maybe<Scalars["Int"]>;
  recipe_id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "recipe_ingredient" */
export type Recipe_Ingredient_Insert_Input = {
  amount?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  ingredient?: Maybe<Ingredient_Obj_Rel_Insert_Input>;
  ingredient_id?: Maybe<Scalars["Int"]>;
  recipe?: Maybe<Recipe_Obj_Rel_Insert_Input>;
  recipe_id?: Maybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Recipe_Ingredient_Max_Fields = {
  amount?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  ingredient_id?: Maybe<Scalars["Int"]>;
  recipe_id?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "recipe_ingredient" */
export type Recipe_Ingredient_Max_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ingredient_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Recipe_Ingredient_Min_Fields = {
  amount?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  ingredient_id?: Maybe<Scalars["Int"]>;
  recipe_id?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "recipe_ingredient" */
export type Recipe_Ingredient_Min_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ingredient_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "recipe_ingredient" */
export type Recipe_Ingredient_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Recipe_Ingredient>;
};

/** input type for inserting object relation for remote table "recipe_ingredient" */
export type Recipe_Ingredient_Obj_Rel_Insert_Input = {
  data: Recipe_Ingredient_Insert_Input;
  on_conflict?: Maybe<Recipe_Ingredient_On_Conflict>;
};

/** on conflict condition type for table "recipe_ingredient" */
export type Recipe_Ingredient_On_Conflict = {
  constraint: Recipe_Ingredient_Constraint;
  update_columns: Array<Recipe_Ingredient_Update_Column>;
};

/** ordering options when selecting data from "recipe_ingredient" */
export type Recipe_Ingredient_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ingredient?: Maybe<Ingredient_Order_By>;
  ingredient_id?: Maybe<Order_By>;
  recipe?: Maybe<Recipe_Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** select columns of table "recipe_ingredient" */
export enum Recipe_Ingredient_Select_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  Id = "id",
  /** column name */
  IngredientId = "ingredient_id",
  /** column name */
  RecipeId = "recipe_id"
}

/** input type for updating data in table "recipe_ingredient" */
export type Recipe_Ingredient_Set_Input = {
  amount?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  ingredient_id?: Maybe<Scalars["Int"]>;
  recipe_id?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Recipe_Ingredient_Stddev_Fields = {
  amount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  ingredient_id?: Maybe<Scalars["Float"]>;
  recipe_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "recipe_ingredient" */
export type Recipe_Ingredient_Stddev_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ingredient_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Recipe_Ingredient_Stddev_Pop_Fields = {
  amount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  ingredient_id?: Maybe<Scalars["Float"]>;
  recipe_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "recipe_ingredient" */
export type Recipe_Ingredient_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ingredient_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Recipe_Ingredient_Stddev_Samp_Fields = {
  amount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  ingredient_id?: Maybe<Scalars["Float"]>;
  recipe_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "recipe_ingredient" */
export type Recipe_Ingredient_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ingredient_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Recipe_Ingredient_Sum_Fields = {
  amount?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  ingredient_id?: Maybe<Scalars["Int"]>;
  recipe_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "recipe_ingredient" */
export type Recipe_Ingredient_Sum_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ingredient_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** update columns of table "recipe_ingredient" */
export enum Recipe_Ingredient_Update_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  Id = "id",
  /** column name */
  IngredientId = "ingredient_id",
  /** column name */
  RecipeId = "recipe_id"
}

/** aggregate var_pop on columns */
export type Recipe_Ingredient_Var_Pop_Fields = {
  amount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  ingredient_id?: Maybe<Scalars["Float"]>;
  recipe_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "recipe_ingredient" */
export type Recipe_Ingredient_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ingredient_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Recipe_Ingredient_Var_Samp_Fields = {
  amount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  ingredient_id?: Maybe<Scalars["Float"]>;
  recipe_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "recipe_ingredient" */
export type Recipe_Ingredient_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ingredient_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Recipe_Ingredient_Variance_Fields = {
  amount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  ingredient_id?: Maybe<Scalars["Float"]>;
  recipe_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "recipe_ingredient" */
export type Recipe_Ingredient_Variance_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ingredient_id?: Maybe<Order_By>;
  recipe_id?: Maybe<Order_By>;
};

/** input type for inserting data into table "recipe" */
export type Recipe_Insert_Input = {
  cooking_time?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  photo_url?: Maybe<Scalars["String"]>;
  recipe_ingredients?: Maybe<Recipe_Ingredient_Arr_Rel_Insert_Input>;
  servings?: Maybe<Scalars["Int"]>;
  steps?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Recipe_Max_Fields = {
  cooking_time?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  photo_url?: Maybe<Scalars["String"]>;
  servings?: Maybe<Scalars["Int"]>;
  steps?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "recipe" */
export type Recipe_Max_Order_By = {
  cooking_time?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  servings?: Maybe<Order_By>;
  steps?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Recipe_Min_Fields = {
  cooking_time?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  photo_url?: Maybe<Scalars["String"]>;
  servings?: Maybe<Scalars["Int"]>;
  steps?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "recipe" */
export type Recipe_Min_Order_By = {
  cooking_time?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  servings?: Maybe<Order_By>;
  steps?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "recipe" */
export type Recipe_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Recipe>;
};

/** input type for inserting object relation for remote table "recipe" */
export type Recipe_Obj_Rel_Insert_Input = {
  data: Recipe_Insert_Input;
  on_conflict?: Maybe<Recipe_On_Conflict>;
};

/** on conflict condition type for table "recipe" */
export type Recipe_On_Conflict = {
  constraint: Recipe_Constraint;
  update_columns: Array<Recipe_Update_Column>;
};

/** ordering options when selecting data from "recipe" */
export type Recipe_Order_By = {
  cooking_time?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  recipe_ingredients_aggregate?: Maybe<Recipe_Ingredient_Aggregate_Order_By>;
  servings?: Maybe<Order_By>;
  steps?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "recipe" */
export enum Recipe_Select_Column {
  /** column name */
  CookingTime = "cooking_time",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  PhotoUrl = "photo_url",
  /** column name */
  Servings = "servings",
  /** column name */
  Steps = "steps",
  /** column name */
  Url = "url",
  /** column name */
  UserId = "user_id"
}

/** input type for updating data in table "recipe" */
export type Recipe_Set_Input = {
  cooking_time?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  photo_url?: Maybe<Scalars["String"]>;
  servings?: Maybe<Scalars["Int"]>;
  steps?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Recipe_Stddev_Fields = {
  cooking_time?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  servings?: Maybe<Scalars["Float"]>;
  user_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "recipe" */
export type Recipe_Stddev_Order_By = {
  cooking_time?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  servings?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Recipe_Stddev_Pop_Fields = {
  cooking_time?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  servings?: Maybe<Scalars["Float"]>;
  user_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "recipe" */
export type Recipe_Stddev_Pop_Order_By = {
  cooking_time?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  servings?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Recipe_Stddev_Samp_Fields = {
  cooking_time?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  servings?: Maybe<Scalars["Float"]>;
  user_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "recipe" */
export type Recipe_Stddev_Samp_Order_By = {
  cooking_time?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  servings?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Recipe_Sum_Fields = {
  cooking_time?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  servings?: Maybe<Scalars["Int"]>;
  user_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "recipe" */
export type Recipe_Sum_Order_By = {
  cooking_time?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  servings?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** update columns of table "recipe" */
export enum Recipe_Update_Column {
  /** column name */
  CookingTime = "cooking_time",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  PhotoUrl = "photo_url",
  /** column name */
  Servings = "servings",
  /** column name */
  Steps = "steps",
  /** column name */
  Url = "url",
  /** column name */
  UserId = "user_id"
}

/** aggregate var_pop on columns */
export type Recipe_Var_Pop_Fields = {
  cooking_time?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  servings?: Maybe<Scalars["Float"]>;
  user_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "recipe" */
export type Recipe_Var_Pop_Order_By = {
  cooking_time?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  servings?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Recipe_Var_Samp_Fields = {
  cooking_time?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  servings?: Maybe<Scalars["Float"]>;
  user_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "recipe" */
export type Recipe_Var_Samp_Order_By = {
  cooking_time?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  servings?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Recipe_Variance_Fields = {
  cooking_time?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  servings?: Maybe<Scalars["Float"]>;
  user_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "recipe" */
export type Recipe_Variance_Order_By = {
  cooking_time?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  servings?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  /** fetch data from the table: "ingredient" */
  ingredient: Array<Ingredient>;
  /** fetch aggregated fields from the table: "ingredient" */
  ingredient_aggregate: Ingredient_Aggregate;
  /** fetch data from the table: "ingredient" using primary key columns */
  ingredient_by_pk?: Maybe<Ingredient>;
  /** fetch data from the table: "recipe" */
  recipe: Array<Recipe>;
  /** fetch aggregated fields from the table: "recipe" */
  recipe_aggregate: Recipe_Aggregate;
  /** fetch data from the table: "recipe" using primary key columns */
  recipe_by_pk?: Maybe<Recipe>;
  /** fetch data from the table: "recipe_ingredient" */
  recipe_ingredient: Array<Recipe_Ingredient>;
  /** fetch aggregated fields from the table: "recipe_ingredient" */
  recipe_ingredient_aggregate: Recipe_Ingredient_Aggregate;
  /** fetch data from the table: "recipe_ingredient" using primary key columns */
  recipe_ingredient_by_pk?: Maybe<Recipe_Ingredient>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};

/** subscription root */
export type Subscription_RootIngredientArgs = {
  distinct_on?: Maybe<Array<Ingredient_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Ingredient_Order_By>>;
  where?: Maybe<Ingredient_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootIngredient_AggregateArgs = {
  distinct_on?: Maybe<Array<Ingredient_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Ingredient_Order_By>>;
  where?: Maybe<Ingredient_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootIngredient_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootRecipeArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootRecipe_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootRecipe_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootRecipe_IngredientArgs = {
  distinct_on?: Maybe<Array<Recipe_Ingredient_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Ingredient_Order_By>>;
  where?: Maybe<Recipe_Ingredient_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootRecipe_Ingredient_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Ingredient_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Ingredient_Order_By>>;
  where?: Maybe<Recipe_Ingredient_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootRecipe_Ingredient_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars["Int"];
};

/** expression to compare columns of type text. All fields are combined with logical 'AND'. */
export type Text_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "user" */
export type User = {
  email: Scalars["String"];
  id: Scalars["Int"];
  name: Scalars["String"];
  password: Scalars["String"];
  /** An array relationship */
  recipes: Array<Recipe>;
  /** An aggregated array relationship */
  recipes_aggregate: Recipe_Aggregate;
};

/** columns and relationships of "user" */
export type UserRecipesArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserRecipes_AggregateArgs = {
  distinct_on?: Maybe<Array<Recipe_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Recipe_Order_By>>;
  where?: Maybe<Recipe_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  avg?: Maybe<User_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
  stddev?: Maybe<User_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Sum_Order_By>;
  var_pop?: Maybe<User_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Var_Samp_Order_By>;
  variance?: Maybe<User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "user" */
export type User_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  email?: Maybe<Text_Comparison_Exp>;
  id?: Maybe<Integer_Comparison_Exp>;
  name?: Maybe<Text_Comparison_Exp>;
  password?: Maybe<Text_Comparison_Exp>;
  recipes?: Maybe<Recipe_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailKey = "user_email_key",
  /** unique or primary key constraint */
  UserPkey = "user_pkey"
}

/** input type for incrementing integer columne in table "user" */
export type User_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  recipes?: Maybe<Recipe_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  recipes_aggregate?: Maybe<Recipe_Aggregate_Order_By>;
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Password = "password"
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "user" */
export type User_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "user" */
export type User_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "user" */
export type User_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "user" */
export type User_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Password = "password"
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "user" */
export type User_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "user" */
export type User_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "user" */
export type User_Variance_Order_By = {
  id?: Maybe<Order_By>;
};
export type RecipeFragmentFragment = { __typename?: "recipe" } & Pick<
  Recipe,
  "id" | "description" | "name" | "photo_url" | "url"
> & {
    recipe_ingredients: Array<
      { __typename?: "recipe_ingredient" } & Pick<
        Recipe_Ingredient,
        "amount"
      > & {
          ingredient: { __typename?: "ingredient" } & Pick<
            Ingredient,
            "name" | "unit"
          >;
        }
    >;
  };

export type RecipesQueryVariables = {};

export type RecipesQuery = { __typename?: "query_root" } & {
  recipe: Array<{ __typename?: "recipe" } & RecipeFragmentFragment>;
};

export type RecipeQueryVariables = {
  id: Scalars["Int"];
};

export type RecipeQuery = { __typename?: "query_root" } & {
  recipe: Array<{ __typename?: "recipe" } & RecipeFragmentFragment>;
};

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
import * as ReactApolloHooks from "react-apollo-hooks";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export const RecipeFragmentFragmentDoc = gql`
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
export const RecipesDocument = gql`
  query Recipes {
    recipe {
      ...RecipeFragment
    }
  }
  ${RecipeFragmentFragmentDoc}
`;

export const RecipesComponent = (
  props: Omit<
    Omit<ReactApollo.QueryProps<RecipesQuery, RecipesQueryVariables>, "query">,
    "variables"
  > & { variables?: RecipesQueryVariables }
) => (
  <ReactApollo.Query<RecipesQuery, RecipesQueryVariables>
    query={RecipesDocument}
    {...props}
  />
);

export type RecipesProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<RecipesQuery, RecipesQueryVariables>
> &
  TChildProps;
export function withRecipes<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    RecipesQuery,
    RecipesQueryVariables,
    RecipesProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    RecipesQuery,
    RecipesQueryVariables,
    RecipesProps<TChildProps>
  >(RecipesDocument, {
    alias: "withRecipes",
    ...operationOptions
  });
}

export function useRecipesQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<RecipesQueryVariables>
) {
  return ReactApolloHooks.useQuery<RecipesQuery, RecipesQueryVariables>(
    RecipesDocument,
    baseOptions
  );
}
export const RecipeDocument = gql`
  query Recipe($id: Int!) {
    recipe(where: { id: { _eq: $id } }) {
      ...RecipeFragment
    }
  }
  ${RecipeFragmentFragmentDoc}
`;

export const RecipeComponent = (
  props: Omit<
    Omit<ReactApollo.QueryProps<RecipeQuery, RecipeQueryVariables>, "query">,
    "variables"
  > & { variables: RecipeQueryVariables }
) => (
  <ReactApollo.Query<RecipeQuery, RecipeQueryVariables>
    query={RecipeDocument}
    {...props}
  />
);

export type RecipeProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<RecipeQuery, RecipeQueryVariables>
> &
  TChildProps;
export function withRecipe<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    RecipeQuery,
    RecipeQueryVariables,
    RecipeProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    RecipeQuery,
    RecipeQueryVariables,
    RecipeProps<TChildProps>
  >(RecipeDocument, {
    alias: "withRecipe",
    ...operationOptions
  });
}

export function useRecipeQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<RecipeQueryVariables>
) {
  return ReactApolloHooks.useQuery<RecipeQuery, RecipeQueryVariables>(
    RecipeDocument,
    baseOptions
  );
}
