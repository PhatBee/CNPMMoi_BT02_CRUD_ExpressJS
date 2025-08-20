import db from '../models/index';
import CRUDservice from '../services/CRUDservice';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log('..........................................');
        console.log(data);
        console.log('..........................................');
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    }
    catch (error) {
        console.error(error);
    }
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let getFindAllCRUD = async (req, res) => {
    let users = await CRUDservice.getAllUsers();
    return res.render('users/findAllUsers.ejs', {
        datalist: users
    });
}

let postCRUD = async (req, res) => {
    let message = await CRUDservice.createNewUser(req.body);
    console.log(message);
    return res.send("Post CRUD to Server");
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let user = await CRUDservice.getUserInfoById(userId);
        return res.render('users/editUser.ejs', {
            data: user
        });
    }
    return res.send('User not found');
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let data1 = await CRUDservice.updateUser(data);

    return res.render('users/findAllUsers.ejs', {
        datalist: data1
    });
}

let deleteCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        await CRUDservice.deleteUserById(userId);
        return res.send('User deleted successfully');
    }
    else{
        return res.send('User not found');
    }
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    getFindAllCRUD: getFindAllCRUD,
    postCRUD: postCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
};
