
-- create database for learn_wise_db;

create database learn_wise_db;

-- query for swithing  to learn_wise_db

use learn_wise_db;

-- query for creating language and  course table

-- language [id,name]

create table language (

    id int PRIMARY KEY auto_increment,
    name varchar(100) not null unique
);


--  course[id,title,fee,language_id]

create table course(

    id int PRIMARY KEY auto_increment,
    title varchar(200) not null unique,
    fee int not null,
    language_id int not null
)


-- inserting to language table

insert into language(name) values
                    ('python'),
                    ('java'),
                    ('javascript'),
                    ('dart');


select language.name ,count(course.id) 
from language inner join course on language.id = course.language_id 
group by course.language_id;

-- joins 
select




select * from left_table innerjoin right_table on condition
-- innerjoins
-- leftjoin
-- right
-- relations ForiegnKey




