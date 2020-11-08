const expect = require('chai').expect,
        setup = require('../setup.test'),
        savingService = require('../../services/saving.service'),
        userService = require('../../services/user.service'),
        mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;


const userData = {user_name:'dummy', password: 'dummy'}

describe('Saving service test suite', ()=>{
        
        setup();

        it('Find all Savings of a precreated user', async ()=>{

                const savedUser = await userService.createUser(userData);

                expect(savedUser).to.have.property('_id');

                const savedSaving = await savingService.getSavingOfUser(savedUser._id);
                
                expect(savedSaving);

        });

        it('Create a new Saving', async ()=>{

                const user = await userService.getUserByUsername(userData.user_name);
                
                expect(user).to.not.be.null;

                const saving = await savingService.createSaving(user._id, 12345);
                
                expect(saving).to.not.be.null;
                expect(saving).to.have.property('_id');

        });

        it('Unsuccesfull new Saving', async ()=>{

                const saving = await savingService.createSaving(undefined, 12345);
                expect(saving).to.be.undefined;

        });

        after(()=>{
                mongoose.connection.db.dropCollection('users');
                mongoose.connection.db.dropCollection('savings');
            });
});