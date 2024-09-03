"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const api_1 = __importDefault(require("./api"));
const connection_1 = __importDefault(require("./database/connection"));
dotenv_1.default.config();
const PORT = process.env.PORT;
(() => __awaiter(void 0, void 0, void 0, function* () { return yield (0, connection_1.default)(); }))();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    // allowedHeaders: ["Content-Type"],
    // methods: ["GET", "POST", "PATCH", "DELETE"],
    // origin: [],
    credentials: true,
}));
// Middlewares
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
// Routes
app.use("/api", api_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map