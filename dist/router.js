"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_controller_1 = __importDefault(require("./controllers/post.controller"));
const routers = express_1.default.Router();
routers.get('/posts', post_controller_1.default.getAll);
exports.default = routers;
