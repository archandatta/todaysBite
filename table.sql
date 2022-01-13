drop table if exists recipe_meal_plan;
drop table if exists meal_plan;
drop table if exists recipe_tag;
drop table if exists tag;
drop table if exists recipe_ingredient;
drop table if exists ingredient;
drop table if exists recipe;
drop table if exists user;

BEGIN TRANSACTION;

create table user(
    user_id TEXT NOT NULL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL
    );

insert into user values ("U1", "user1", "pass1");

create table recipe(
    recipe_id TEXT NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    prep_time TEXT,
    cook_time TEXT,
    user_id TEXT NOT NULL,
    foreign key (user_id) references user(user_id) on delete cascade
    );

insert into recipe values ("R1", "Cheesy Chicken Milanese", "with Green Bean Cabbage Slaw", "10 min", "30 min", "U1");
insert into recipe values ("R2", "Smoky Barramundi with Remoulade", "With Crisp Apple Salad", "35 min", "20 min", "U1");
insert into recipe values ("R3", "Mini Turkey Meatloaves", "with Orange Cranberry Sauce", "20 min", "30 min", "U1");

create table ingredient(
    ingredient_id TEXT NOT NULL PRIMARY KEY,
    name TEXT,
    unit TEXT,
    quantity DECIMAL,
    store TEXT
    );

insert into ingredient values ("I1", "Barramundi", "g", 282, "Hello Fresh");
insert into ingredient values ("I2", "Horseradish", "tbsp", 1, "Hello Fresh");
insert into ingredient values ("I3", "Coleslaw Cabbage Mix", "g", 170, "Hello Fresh");
insert into ingredient values ("I4", "Granny Smith Apple", "unit", 1, "Hello Fresh");
insert into ingredient values ("I5", "Lemon", "unit", 1, "Hello Fresh");
insert into ingredient values ("I6", "Mayonnaise", "tbsp", 4, "Hello Fresh");
insert into ingredient values ("I7", "Green Beans", "g", 170, "Hello Fresh");
insert into ingredient values ("I8", "BBQ Seasoning", "tbsp", 1, "Hello Fresh");
insert into ingredient values ("I9", "Dried Cranberries", "cup", 0.25, "Hello Fresh");
insert into ingredient values ("I11", "Chicken Breasts", "unit", 2, "Hello Fresh");
insert into ingredient values ("I12", "Panko Breadcrumbs", "cup", 0.5, "Hello Fresh");
insert into ingredient values ("I13", "Mozzarella Cheese, shredded", "cup", 0.75, "Hello Fresh");
insert into ingredient values ("I14", "Spring Mix", "g", 56, "Hello Fresh");
insert into ingredient values ("I15", "Baby Tomatoes", "g", 113, "Hello Fresh");
insert into ingredient values ("I16", "Mayonnaise", "tbsp", 2, "Hello Fresh");
insert into ingredient values ("I17", "Gala Apple", "unit", 1, "Hello Fresh");
insert into ingredient values ("I18", "White Wine Vinegar", "tbsp", 1, "Hello Fresh");
insert into ingredient values ("I19", "Dijon Mustard", "tbsp", 1.5, "Hello Fresh");
insert into ingredient values ("I20", "Sugar", "tbsp", 1.5, "Hello Fresh");
insert into ingredient values ("I21", "Minced Turkey", "g", 250, "Hello Fresh");
insert into ingredient values ("I22", "Panko Breadcrumbs", "cup", .25, "Hello Fresh");
insert into ingredient values ("I23", "Sour Cream", "tbsp", 3, "Hello Fresh");
insert into ingredient values ("I24", "Garlic", "g", 6, "Hello Fresh");
insert into ingredient values ("I25", "Broccoli, florets", "g", 227, "Hello Fresh");
insert into ingredient values ("I26", "Baby Spinach", "g", 56, "Hello Fresh");
insert into ingredient values ("I27", "Dried Cranberries", "cup", 0.25, "Hello Fresh");
insert into ingredient values ("I28", "Yellow Potato", "g", 300, "Hello Fresh");
insert into ingredient values ("I29", "Chives", "g", 7, "Hello Fresh");
insert into ingredient values ("I30", "Shallot", "g", 50, "Hello Fresh");
insert into ingredient values ("I31", "Thyme", "g", 7, "Hello Fresh");
insert into ingredient values ("I32", "Navel Orange", "unit", 1, "Hello Fresh");
insert into ingredient values ("I33", "Unsalted Butter", "tbsp", 2, "Hello Fresh");


create table recipe_ingredient(
    recipe_id TEXT NOT NULL,
    ingredient_id TEXT NOT NULL,
    step_number INTEGER,
    PRIMARY KEY (recipe_id, ingredient_id)
    );

insert into recipe_ingredient values ("R2", "I1", 1);
insert into recipe_ingredient values ("R2", "I2", 2);
insert into recipe_ingredient values ("R2", "I3", 3);
insert into recipe_ingredient values ("R2", "I4", 4);
insert into recipe_ingredient values ("R2", "I5", 5);
insert into recipe_ingredient values ("R2", "I6", 6);
insert into recipe_ingredient values ("R2", "I7", 7);
insert into recipe_ingredient values ("R2", "I8", 8);
insert into recipe_ingredient values ("R2", "I9", 9);
insert into recipe_ingredient values ("R1", "I10", 1);
insert into recipe_ingredient values ("R1", "I11", 2);
insert into recipe_ingredient values ("R1", "I12", 3);
insert into recipe_ingredient values ("R1", "I13", 4);
insert into recipe_ingredient values ("R1", "I14", 5);
insert into recipe_ingredient values ("R1", "I15", 6);
insert into recipe_ingredient values ("R1", "I16", 7);
insert into recipe_ingredient values ("R1", "I17", 8);
insert into recipe_ingredient values ("R1", "I18", 9);
insert into recipe_ingredient values ("R1", "I19", 10);
insert into recipe_ingredient values ("R3", "I21", 1);
insert into recipe_ingredient values ("R3", "I22", 2);
insert into recipe_ingredient values ("R3", "I23", 3);
insert into recipe_ingredient values ("R3", "I24", 4);
insert into recipe_ingredient values ("R3", "I25", 5);
insert into recipe_ingredient values ("R3", "I26", 6);
insert into recipe_ingredient values ("R3", "I27", 7);
insert into recipe_ingredient values ("R3", "I28", 8);
insert into recipe_ingredient values ("R3", "I29", 9);
insert into recipe_ingredient values ("R3", "I30", 10);
insert into recipe_ingredient values ("R3", "I31", 11);
insert into recipe_ingredient values ("R3", "I32", 12);
insert into recipe_ingredient values ("R3", "I33", 13);

create table tag(
    tag_id TEXT NOT NULL,
    tag TEXT
    );

insert into tag values ("T1", "Fish");
insert into tag values ("T2", "Meat");
insert into tag values ("T3", "Chicken");
insert into tag values ("T3", "Turkey");

create table recipe_tag(
    recipe_id TEXT NOT NULL,
    tag_id TEXT NOT NULL,
    PRIMARY KEY (recipe_id, tag_id)
    );

insert into recipe_tag values ("R1", "T1");
insert into recipe_tag values ("R2", "T2");
insert into recipe_tag values ("R2", "T3");
insert into recipe_tag values ("R3", "T2");
insert into recipe_tag values ("R3", "T3");

create table meal_plan(
    meal_id TEXT NOT NULL,
    recipe_name TEXT,
    day TEXT
    );

insert into meal_plan values ("M1", "Smoky Barramundi with Remoulade", "Tuesday");
insert into meal_plan values ("M2", "Cheesy Chicken Milanese", "Wednesday");
insert into meal_plan values ("M3", "Mini Turkey Meatloaves", "Thursday");

create table recipe_meal_plan(
    recipe_id TEXT NOT NULL,
    meal_id TEXT NOT NULL,
    course TEXT,
    PRIMARY KEY (recipe_id, meal_id)
    );

insert into recipe_meal_plan values ("R1", "M1", "Dinner");
insert into recipe_meal_plan values ("R2", "M2", "Lunch");
insert into recipe_meal_plan values ("R3", "M3", "Dinner");

COMMIT;
