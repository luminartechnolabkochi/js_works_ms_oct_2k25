

-- create data base for job_hub_db;

create database job_hub_db;

-- switch

use job_hub_db;

-- schema
-- company [id,name,email,location]

create table company (

    id int PRIMARY KEY auto_increment,
    name varchar(200) not null unique,
    email varchar(200) not null unique,
    location varchar(200) not null
);
-- add comapny

-- jobs [id,title,description,salary,experience,last_date,company_id]

create table jobs(

    id int PRIMARY KEY auto_increment,
    title varchar(200) not null,
    description text ,
    salary int not null default 0,
    experience int not null default 0,
    last_date date ,
    company_id int,
    Foriegn Key(company_id) references company(id)
);




-- create a database schema for todoapplication where 
-- a user can post many todos
-- register
-- login,logout
-- add todo
-- list todo
-- filter

-- user[id,name,email,phone,password]
-- todo[id,title,priority(high,low,medium),created_at,status,user_id(FK)],

-- watch repair
-- buy cricket ball
-- buy vegetables
-- buy fish


-- 

-- user
    -- id int PK AI
    -- name VC NN
    -- email VC NN UQ
    -- phone VC NN UQ
    -- password VC NN UQ

-- todo
    --id  I=int PK AI
    -- title VC NN
    -- priority enum
    -- created_at date 
    -- status boolean default false
    -- user_id int FK [user(id)]


-- create a database schema for expense tracker application
-- user
    -- id int PK AI
    -- name VC NN
    -- email VC NN UQ
    -- phone VC NN UQ
    -- password VC NN UQ

-- expense

    -- id int PK AI
    -- title VC NN
    -- amount int NN
    -- category enum (food,travel,fuel,health,bills,other)
    -- created_at 
    -- user_id int FK (user (id)) 
    -- priority (need,want)
    -- payment_method (upi,cash)
    




