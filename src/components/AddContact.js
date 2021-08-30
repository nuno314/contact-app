import React from 'react';

class AddContact extends React.Component {
    render() {
        return (
            <div className="ui main">
                <h1>Add Contact</h1>
                <form className="ui form"  >
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"></input>
                    </div>
            
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="name" placeholder="Email"></input>
                    </div>
                    <button className="button">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddContact;