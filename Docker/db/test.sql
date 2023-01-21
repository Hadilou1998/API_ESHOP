--  ------------------------
--  BDD Base_API
--  ------------------------

DROP DATABASE Base_API;

CREATE DATABASE Base_API;

USE Base_API;

--  ------------------------
--  CREATION DES TABLES
--  ------------------------

CREATE TABLE IF NOT EXISTS Users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(15) NOT NULL,
    role ENUM('admin', 'user') NOT NULL,
    email VARCHAR(45) NOT NULL,
    adresse VARCHAR(60) NOT NULL
);

CREATE TABLE IF NOT EXISTS Products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price FLOAT UNSIGNED NOT NULL,
    link VARCHAR(255) NOT NULL,
    currency VARCHAR(10) NOT NULL,
    id_user INT
);

--  ------------------------
--  INSERTION DES DONNÉES
--  ------------------------

INSERT INTO Users VALUES
(NULL,  'Amanda932' ,   'amanda.93200'  ,   'user'  ,   'amanda.goldman@example.com'    ,   '24 Boulevard Marcel Sembat, 93200 Saint-Denis'         ),
(NULL,  'Lucie921'  ,   'lucie.92100'   ,   'admin' ,   'lucie.gustine@example.com'     ,   '48 Avenue de la République, 92100 Boulogne-Billancourt'),
(NULL,  'Martin910' ,   'martin.91000'  ,   'user'  ,   'martin.lamotte@example.com'    ,   '72 Rue de la Liberté, 91000 Evry-Courcouronnes'        ),
(NULL,  'Clément935',   'clement.93500' ,   'admin' ,   'clement.debussy@example.com'   ,   '96 Boulevard Voltaire, 93500 Pantin'                   ),
(NULL,  'Fanny924'  ,   'fanny.92400'   ,   'user'  ,   'fanny.goldman@example.com'     ,   '120 Avenue du Président Wilson, 92400 Courbevoie'      ),
(NULL,  'Gabriel750',   'gabriel.75011' ,   'admin' ,   'gabriel.attal@example.com'     ,   '48 Boulevard Voltaire, 75011 Paris'                    );

INSERT INTO Products VALUES

(NULL,  'Deeluxe - Doudoune capuche Fourrure Femme Melinda Blanc'               ,   39.18   ,   'assets/doudoune-melinda.jpg'                                                   ,   '€' ,   1),
(NULL,  'Manteau en Fourrure Créations Paris Fausse Fourrure Marron 46 (XXL)'   ,   50.00   ,   'assets/manteau-fausse-fourrure.jpg'                                            ,   '€' ,   1),          
(NULL,  'Tally Weijl Doudoune longue blanche en Fausse Fourrure XL'             ,   34.99   ,   'assets/tally-weijl-doudoune-longue-blanche.jpeg'                               ,   '€' ,   2),
(NULL,  'Doudoune matelassée unie Noir - Taille 54'                             ,   34.99   ,   'assets/doudoune-matelassee-unie-taille-54.jpg'                                 ,   '€' ,   2),
(NULL,  'Doudoune Homme CARGERONNE'                                             ,   47.61   ,   'assets/Doudoune-homme-CARGERONNE.jpg'                                          ,   '€' ,   3),
(NULL,  'Doudoune matelassée bleu marine-bleu roi polyamide'                    ,   41.60   ,   'assets/doudoune-matelassee-bleu-marine-bleu-roi-pyramide.jpg'                  ,   '€' ,   3),
(NULL,  'Doudoune Homme CEPAD'                                                  ,   47.61   ,   'assets/Doudoune-Homme-CEPAD.jpeg'                                              ,   '€' ,   4),
(NULL,  'Doudoune longue imperméable capuche Fausse Fourrure Lol'               ,   69.99   ,   'assets/Doudoune-longue-imperméable-fausse-fourrure.jpeg'                       ,   '€' ,   4),
(NULL,  'Doudoune courte matelassée Col Fausse Fourrure Femme Best Mountain'    ,   32.99   ,   'assets/doudoune-courte-matelassee-col-fausse-fourrure-femme-best-mountain.jpg' ,   '€' ,   5),
(NULL,  'Trendyol Veste Duvet - Doudoune - Noir - X-Small'                      ,   32.99   ,   'assets/Trendyol Veste Duvet - Doudoune - Noir - X-Small.jpeg'                  ,   '€' ,   5),
(NULL,  'Name IT - Parka longue capuche amovible Mace'                          ,   32.00   ,   'assets/Name IT - Parka longue capuche amovible Mace.jpeg'                      ,   '€' ,   6),
(NULL,  'Doudoune brillante Homme en Duvet'                                     ,   44.99   ,   'assets/doudoune-brillante-homme-en-duvet.jpg'                                  ,   '€' ,   6);

--  ------------------------
--  PRIVILÈGES
--  ------------------------

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'hadil';

FLUSH PRIVILEGES;