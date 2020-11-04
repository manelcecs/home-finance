const expect = require('chai').expect,
        setup = require('../setup.test'),
        savingService = require('../../services/saving.service'),
        userService = require('../../services/user.service'),
        mongoose = require('mongoose');

const userData = {user_name:'dummy', password: 'dummy'}

describe('Saving service test suite', ()=>{
        
        setup();

        it('Find all Savings of a precreated user', async ()=>{

                const savedUser = await userService.createUser(userData);

                expect(savedUser).to.have.property('_id');

                const savedSaving = await savingService.getSavingOfUser(savedUser._id);
                
                expect(savedSaving);

        });

        after(()=>{
                mongoose.connection.db.dropCollection('users');
                mongoose.connection.db.dropCollection('savings');
            });
});