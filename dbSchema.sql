CREATE DATABASE CWSMS;

USE CWSMS;

CREATE TABLE Car (
    PlateNumber VARCHAR(20) PRIMARY KEY,
    CarType VARCHAR(50),
    CarSize VARCHAR(20),
    DriverName VARCHAR(100),
    PhoneNumber VARCHAR(15)
);


CREATE TABLE Package (
    PackageNumber INT AUTO_INCREMENT PRIMARY KEY,
    PackageName VARCHAR(100),
    PackageDescription TEXT,
    PackagePrice DECIMAL(10,2)
);


CREATE TABLE ServicePackage (
    RecordNumber INT AUTO_INCREMENT PRIMARY KEY,
    ServiceDate DATE,
    PlateNumber VARCHAR(20),
    PackageNumber INT,
    FOREIGN KEY (PlateNumber) REFERENCES Car(PlateNumber),
    FOREIGN KEY (PackageNumber) REFERENCES Package(PackageNumber)
);

CREATE TABLE Payment (
    PaymentNumber INT AUTO_INCREMENT PRIMARY KEY,
    AmountPaid DECIMAL(10,2),
    PaymentDate DATE,
    RecordNumber INT,
    FOREIGN KEY (RecordNumber) REFERENCES ServicePackage(RecordNumber)
);


INSERT INTO Package (PackageName, PackageDescription, PackagePrice) VALUES
('Basic wash', 'Exterior hand wash', 5000),
('Classic wash', 'Interior hand wash', 10000),
('Premium wash', 'Exterior and Interior hand wash', 20000);