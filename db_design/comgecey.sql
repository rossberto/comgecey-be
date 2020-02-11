-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Users` (
  `id` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NULL,
  `father_lname` VARCHAR(255) NULL,
  `mother_lname` VARCHAR(255) NULL,
  `birthdate` DATE NULL,
  `birth_city` VARCHAR(255) NULL,
  `birth_state` VARCHAR(255) NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `confirmed` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Addresses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Addresses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `street` VARCHAR(255) NULL,
  `number` VARCHAR(255) NULL,
  `town` VARCHAR(255) NULL,
  `city` VARCHAR(255) NULL,
  `state` VARCHAR(255) NULL,
  `zip_code` VARCHAR(255) NULL,
  `phone` VARCHAR(255) NULL,
  `Users_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Addresses_Users1_idx` (`Users_id` ASC),
  CONSTRAINT `fk_Addresses_Users1`
    FOREIGN KEY (`Users_id`)
    REFERENCES `mydb`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`MailAddresses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`MailAddresses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `street` VARCHAR(255) NULL,
  `number` VARCHAR(255) NULL,
  `town` VARCHAR(255) NULL,
  `city` VARCHAR(255) NULL,
  `state` VARCHAR(255) NULL,
  `zip_code` VARCHAR(255) NULL,
  `phone` VARCHAR(255) NULL,
  `Users_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_MailAddresses_Users1_idx` (`Users_id` ASC),
  CONSTRAINT `fk_MailAddresses_Users1`
    FOREIGN KEY (`Users_id`)
    REFERENCES `mydb`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Professional`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Professional` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `school` VARCHAR(255) NULL,
  `start_date` DATE NULL,
  `finish_date` DATE NULL,
  `intership` VARCHAR(255) NULL,
  `start_date_internship` DATE NULL,
  `finish_date_internship` DATE NULL,
  `social_service` VARCHAR(255) NULL,
  `start_date_social` DATE NULL,
  `finish_date_social` DATE NULL,
  `exam_date` DATE NULL,
  `exam_type` VARCHAR(255) NULL,
  `tesis` VARCHAR(255) NULL,
  `professional_id` VARCHAR(255) NULL,
  `professional_id_date` DATE NULL,
  `book` VARCHAR(255) NULL,
  `ssa` VARCHAR(255) NULL,
  `Users_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Professional_Users1_idx` (`Users_id` ASC),
  CONSTRAINT `fk_Professional_Users1`
    FOREIGN KEY (`Users_id`)
    REFERENCES `mydb`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Convocatories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Convocatories` (
  `id` VARCHAR(255) NOT NULL,
  `date` DATE NULL,
  `title` VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  `phone` VARCHAR(255) NULL,
  `bank_account` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Places`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Places` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `street` VARCHAR(255) NULL,
  `town` VARCHAR(255) NULL,
  `city` VARCHAR(255) NULL,
  `number` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Newsletters`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Newsletters` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL,
  `main_image_url` VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  `secondary_image_url` VARCHAR(255) NULL,
  `additional_info` VARCHAR(255) NULL,
  `text_1` VARCHAR(255) NULL,
  `text_2` VARCHAR(255) NULL,
  `creation_date` DATE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Suscribers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Suscribers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Users_has_Convocatories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Users_has_Convocatories` (
  `Users_id` VARCHAR(255) NOT NULL,
  `Convocatories_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`Users_id`, `Convocatories_id`),
  INDEX `fk_Users_has_Convocatories_Convocatories1_idx` (`Convocatories_id` ASC),
  INDEX `fk_Users_has_Convocatories_Users1_idx` (`Users_id` ASC),
  CONSTRAINT `fk_Users_has_Convocatories_Users1`
    FOREIGN KEY (`Users_id`)
    REFERENCES `mydb`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Users_has_Convocatories_Convocatories1`
    FOREIGN KEY (`Convocatories_id`)
    REFERENCES `mydb`.`Convocatories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Convocatories_has_Places`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Convocatories_has_Places` (
  `Convocatories_id` VARCHAR(255) NOT NULL,
  `Places_id` INT NOT NULL,
  PRIMARY KEY (`Convocatories_id`, `Places_id`),
  INDEX `fk_Convocatories_has_Places_Places1_idx` (`Places_id` ASC),
  INDEX `fk_Convocatories_has_Places_Convocatories1_idx` (`Convocatories_id` ASC),
  CONSTRAINT `fk_Convocatories_has_Places_Convocatories1`
    FOREIGN KEY (`Convocatories_id`)
    REFERENCES `mydb`.`Convocatories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Convocatories_has_Places_Places1`
    FOREIGN KEY (`Places_id`)
    REFERENCES `mydb`.`Places` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
