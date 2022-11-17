import React, {ChangeEvent, MouseEvent} from "react";


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }

    const saveUser = () => {
        alert('user should be save')
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }



    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(`age changed ${event.currentTarget.value}`)
    }

    const search = (event: MouseEvent<HTMLButtonElement>) => {
      alert(event.currentTarget.value)
    }
    
    return (
        <div>
            <textarea tabIndex={1} onChange={onNameChanged} onBlur={focusLostHandler}>ggg</textarea>
            <input tabIndex={2} onChange={onAgeChanged}/>
            <button name={'save'} tabIndex={4} onClick={search}>search</button>
            <button name={'delete'} tabIndex={4} onClick={saveUser}>delete</button>
            <button name={'save'} tabIndex={4} onClick={deleteUser}>save</button>
        </div>
    )
}