import PropTypes from 'prop-types'
export function Button({text,name="Usuario"}){
    /*if(!text){
        console.error("Texto é requerido")
    }
    console.log(text)*/
    return <button onClick={function() {
        console.log('Ola, mundo')
    }}>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}
/*
Button.defautProps = {
    name:'Some User'
}*/