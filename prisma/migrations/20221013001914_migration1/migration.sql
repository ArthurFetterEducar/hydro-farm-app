-- CreateTable
CREATE TABLE "teste" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "Temperature" TEXT,
    "Humidity" TEXT,
    "Petier_Hot_Temperature" JSON DEFAULT '3',
    "Petier_Hot_State" JSON DEFAULT '0',
    "Peltier_Cold_Temperature" JSON DEFAULT '4',
    "Peltier_Cold_State" JSON DEFAULT '1',
    "Water_Level" TEXT,
    "Pump_State" JSON DEFAULT '1',

    CONSTRAINT "teste_pkey" PRIMARY KEY ("id")
);
