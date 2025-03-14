// import { prisma } from "../../data/postgres";
// import { UserDataSource } from "../../domain/datasources/user.datasource";
// import { UserUpdateDTO, RegisterUserDTO } from '../../domain/dtos/auth/user.dto';

// export const postgresUserDataSource: UserDataSource = {
//   async findAll() {
//     return prisma.user.findMany();
//   },

//   async findById(id: string) {
//     return prisma.user.findUnique({ where: { id } });
//   },

//   async findByEmail(email: string) {
//     return prisma.user.findUnique({ where: { email } });
//   },

//   async save(registerUserDTO: RegisterUserDTO) {
//     return prisma.user.create({ data: registerUserDTO });
//   },

//   async update(userUpdateDTO: UserUpdateDTO) {
//     const userExist = await prisma.user.findUnique({ where: { id: userUpdateDTO.id } });
//     if (!userExist) return null;

//     return prisma.user.update({
//       where: { id: userUpdateDTO.id },
//       data: userUpdateDTO
//     });
//   },

//   async delete(id: string) {
//     const userDeleted = await prisma.user.delete({ where: { id } });
//     return userDeleted ? userDeleted : null;
//   }
// };
