
import React from 'react';
import ProjectsData from '../data/ProjectsData';
const { javaProjects, otherDomainProjects } = ProjectsData;

const projectPageStyle = {
    background: `linear-gradient(0deg, #e0f7fa 0%, #80deea 50%, #80deea 50%, white 100%)`, backgroundSize: '100% 200vh', 
    height: '100vh', width: '100vw', padding: '20px', overflowY: 'scroll'
  };

const projectFlexBoxStyle = {
    display: 'flex', flexDirection: 'column', alignItems: 'center', background: `linear-gradient(0deg, #e0f7fa 0%, #80deea 50%, #80deea 50%, white 100%)`,
    backgroundSize: '100% 200vh', height: '100vh', width: '100vw', padding: '20px', overflowY: 'scroll'
};

const projectBoxStyle = {
    margin: '20px', padding:'20px', width: '80%', background: 'white', borderRadius: '20px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', display: 'flex',
    flexDirection:'column', alignItems:'flex-start',
};

const buyButtonStyle = {
    margin: ' 8px 480px', padding: '10px', backgroundColor: 'blue', color: 'black', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1em',
    transition: 'background-color 0.3s ease',
};

function ProjectPage() {
    return (
        <div style={projectPageStyle}>

            <div style={{margin: '10px auto', textAlign:'center'}}><h1>Java Projects</h1></div>

            {/* JAVA Projects FlexBox */}
            <div style={projectFlexBoxStyle}>
                {javaProjects.map((project, index) => (
                    <div key={index} style={projectBoxStyle}>
                        <h2 style={{ marginTop: '2px', marginLeft:'20px',fontStyle: 'italic', fontSize: '40px', borderBottom: '1px solid black'}}>{project.title}</h2>
                        <div className="image-gallery" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', margin:'auto 30px'}}>
                            {project.imageUrls.map((url, imgIdx) => (
                                <img
                                    key={imgIdx}
                                    src={url}
                                    alt={`${project.title} image ${imgIdx + 1}`}
                                    style={{ width: '250px', borderRadius: '5px', height:'250px' }}
                                />
                            ))}
                        </div>
                        <p style={{ fontSize: '25px', fontFamily:'serif', marginTop:'40px', marginLeft: '20px'}}>{project.description}</p>
                        <div className="technologies" style={{ font: 'serif', gap: '25px', fontSize:'20px', display: 'flex', marginTop: '5px', marginLeft:'20px' }}>
                            {project.technologies.map((tech, idx) => (
                                <span key={idx} style={{backgroundColor: '#e0f7fa', borderRadius: '5px', padding:'10px'}}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a href={project.buyLink} target="_blank" rel="noopener noreferrer">
                            <button style={buyButtonStyle }>
                                Buy Project
                            </button>
                        </a>
                    </div>
                ))}
            </div>

            <div style={{marginTop: '40px', textAlign:'center'}}><h1>Other Domain Projects</h1> </div>

            {/* Other Domain Project Flexbox */}
            <div style={projectFlexBoxStyle}>
                {otherDomainProjects.map((project, index) => (
                    <div key={index} style={projectBoxStyle}>
                        <h2 style={{ marginTop: '2px', marginLeft:'20px',fontStyle: 'italic', fontSize: '40px', borderBottom: '1px solid black'}}>{project.title}</h2>
                        <div className="image-gallery" style={{ display: 'flex', gap: '100px', margin:'auto 30px'}}>
                            {project.imageUrls.map((url, imgIdx) => (
                                <img
                                    key={imgIdx}
                                    src={url}
                                    alt={`${project.title} image ${imgIdx + 1}`}
                                    style={{ width: '250px', borderRadius: '5px', height:'250px' }}
                                />
                            ))}
                        </div>
                        <p style={{ fontSize: '25px', fontFamily:'serif', marginTop:'40px', marginLeft: '20px'}}>{project.description}</p>
                        <div className="technologies" style={{ font: 'serif', gap: '25px', fontSize:'20px', display: 'flex', marginTop: '5px', marginLeft:'20px' }}>
                            {project.technologies.map((tech, idx) => (
                                <span key={idx} style={{backgroundColor: '#e0f7fa', borderRadius: '5px', padding:'10px'}}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a href={project.buyLink} target="_blank" rel="noopener noreferrer">
                            <button style={buyButtonStyle }>
                                Buy Project
                            </button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectPage;
