
const expect = require('chai').expect,
        setup = require('../setup.test'),
        userService = require('../../services/user.service'),
        mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

const userData = {user_name:'dummy', password: 'dummy'}

describe('User service test suite', ()=>{

    setup();

    it('create and save user successfully', async ()=>{
    
        const savedUser = await userService.createUser(userData);
        
        expect(savedUser).to.have.property('_id');
    });

    it('create and save user fail', async ()=>{
    
        const invalidUser = {user_name:'dummyUser'};
        const savedUser = await userService.createUser(invalidUser);
        
        expect(savedUser).to.be.undefined;
    });

    it('Find an user by user_name', async ()=>{
    
        const savedUser = await userService.getUserByUsername(userData.user_name);
        
        expect(savedUser).to.have.property('_id');
    });

    it('Find an user by id', async ()=>{
    
        const savedUser = await userService.getUserById(new ObjectId('someUidOf12B'));
        
        expect(savedUser);
    });

    it('Find all users', async ()=>{
    
        const savedUsers = await userService.getAllUsers();
        
        expect(savedUsers);
    });

    it('Successfull login', async ()=>{

        const user = await userService.getLogin(userData.user_name, userData.password);

        expect(user).to.have.property('_id');
    });

    it('Unsuccessfull login - no user', async ()=>{

        const user = await userService.getLogin('noUser', 'noUser');

        expect(user).to.be.undefined;
    });

    it('Unsuccessfull login - no password', async ()=>{

        const user = await userService.getLogin(userData.user_name, 'noValidPassword');

        expect(user).to.be.undefined;
    });

    it('Deactivate user', async ()=>{
        const user = await userService.deactivateUser('someUidOf12B');

        expect(user).to.be.null;
    });

    it('Activate user', async ()=>{
        const user = await userService.activateUser('someUidOf12B');

        expect(user).to.be.null;
    });

    it('Delete user', async ()=>{
        const user = await userService.deleteUser('someUidOf12B');

        expect(user).to.be.null;
    });

    after(()=>{
        mongoose.connection.db.dropCollection('users');
        mongoose.connection.db.dropCollection('savings');
    });
    
});
