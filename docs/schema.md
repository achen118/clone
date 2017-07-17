# Schema Information #

## users ##

column name  |  data type  |  details
------------ | ----------- | ---------
id | integer | null = false, primary key
username | string | null = false, unique = true, indexed
email | string | null = false, unique = true, indexed
session_token | string | null = false, unique = true, indexed
password_digest | string | null = false

## notes ##

column name  |  data type  |  details
------------ | ----------- | ---------
id | integer | null = false, primary key
author_id | integer | null = false, indexed, foreign key
notebook_id | integer | null = false, indexed, foreign key
title | string | null = false
body | text | null = false

## notebooks ##

column name  |  data type  |  details
------------ | ----------- | ---------
id | integer | null = false, primary key
author_id | integer | null = false, indexed, foreign key
title | string | null = false
description | string |

## tags ##

column name  |  data type  |  details
------------ | ----------- | ---------
id | integer | null = false, primary key
name | string | null = false

## taggings ##

column name  |  data type  |  details
------------ | ----------- | ---------
id | integer | null = false, primary key
note_id | integer | null = false, indexed, foreign key, unique [:note_id, :tag_id]
tag_id | integer | null = false, indexed, foreign key
