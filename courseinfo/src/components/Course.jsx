import Header from './Header'
import Content from './Content'

const Course = (props) => {
    return (
        <div>
            <Header course={props.course}/>
            <Content parts={props.course.parts}/>
        </div>
    )

}

export default Course