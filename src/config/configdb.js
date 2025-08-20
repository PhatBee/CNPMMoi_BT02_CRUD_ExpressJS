import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('node_fulltask', 'root', '1234567@a$', {
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: false
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Kết nối đến cơ sở dữ liệu thành công.');
  } catch (error) {
    console.error('Không thể kết nối đến cơ sở dữ liệu:', error);
  }
};

export default connectDB;
