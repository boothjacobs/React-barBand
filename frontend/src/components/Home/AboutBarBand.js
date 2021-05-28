import {Link} from 'react-router-dom';

const AboutBarBand = () => {
    return (
        <div>
            <p>BarBand was built by Sarah Booth Jacobs using React, Redux, Express, and Sequelize.</p>
            <Link to="https://www.linkedin.com/in/sarah-jacobs-53433923/">LinkedIn</Link> <Link to="https://github.com/boothjacobs">Github</Link>
        </div>
    );
}

export default AboutBarBand;
