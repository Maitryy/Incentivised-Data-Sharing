const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv").config(); 
const cors = require("cors");
const PORT = 5000;
app.use(express.json());

