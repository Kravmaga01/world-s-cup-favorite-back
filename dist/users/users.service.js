"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const handleExetions_exception_1 = require("../exeptions/handleExetions.exception");
let UsersService = class UsersService {
    constructor() { }
    async create(createUserDto) {
        createUserDto.name = createUserDto.name.toUpperCase();
        try {
        }
        catch (error) {
            (0, handleExetions_exception_1.handleException)(error, "usuario");
        }
    }
    findAll() { }
    async findOne(term) {
        let user;
        if (!user) {
            user;
        }
        if (!user)
            throw new common_1.NotFoundException(`El país con el usuario,nombre"${term}" no encontrado `);
        return user;
    }
    async update(term, updateUserDto) {
        const user = await this.findOne(term);
        if (updateUserDto.name)
            updateUserDto.name = updateUserDto.name.toUpperCase();
        try {
        }
        catch (error) {
            (0, handleExetions_exception_1.handleException)(error, "usuario");
        }
    }
    async remove(id) {
        const deletedCount = null;
        if (deletedCount == 0)
            throw new common_1.BadRequestException(`usuario con el id "${id}" no encontrado`);
        return;
    }
    async fillCountriesSeedDate(users) {
        const user = 0;
        return user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map