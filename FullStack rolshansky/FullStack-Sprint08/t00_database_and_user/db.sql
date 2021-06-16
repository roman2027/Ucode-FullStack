CREATE DATABASE IF NOT EXISTS ucode_web;
CREATE USER IF NOT EXISTS 'rolshansky'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL ON ucode_web.* TO 'rolshansky'@'localhost';