"use client"
import ProjectListing from '@/components/ProjectListing';
import '@/styles/project/project.css'
import { useEffect ,useState } from 'react';
import Select from "react-select";
import enterView from 'enter-view';
import '../../public/assets/css/animate.css'
import PageNotFound from '@/components/PageNotFound';
import NotFound from '@/components/NotFound';

const customStyles = {
  control: (base, state) => ({
      ...base,
      width: "100%",
      height: "100%",
      backgroundColor: "none",
      border: state.isFocused ? "none" : "none",
      boxShadow: state.isFocused ? "none" : "none",
      "&:hover": {
        borderColor: "#007bff"
      }
  }),
  label: (base, state) => ({
    ...base,
    display: "none"
  }),
  valueContainer: (base) => ({
      ...base,
      height: "100%",
    }),
  input: (base, state) => ({
      ...base,
      width: "100%",
      height: "45px",
      minHeight: "100%",
      minWidth: "100%"
  }),
  placeholder: (base, state) => ({
      ...base,
      color: "var(--text)",
      fontFamily: "ttrg"
  }),
  option: (base, state) => ({
      ...base,
      width: "100%",
      background: state.isFocused ? "var(--gradient-a)" : "#fff",
      marginBottom: "5px",
      fontSize: "16px",
      padding: "3px 10px",
      color: state.isFocused ? "#fff" : "#000",
      "&:hover": {
        borderColor: "#000",
        color: "#fff"
      }
    }),
  menu: (base) => ({
  ...base,
  zIndex: 10,
  width: "200px"
  })
}

const options = [
  { value: "India", label: "India"},
  { value: "Nigeria", label: "Nigeria"},
  { value: "Africa", label: "Africa"},
  { value: "Oman", label: "Oman"},
]
const options2 = [
  { value: "Water & Sanitation", label: "Water & Sanitation"},
  { value: "Roads & Highways", label: "Roads & Highways"},
  { value: "Rail & Metro", label: "Rail & Metro"},
  { value: "Energy", label: "Energy"},
]

const allProjects = [
  {
    title: "Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria",
    desc: "Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone",
    sector: "Water & Sanitation",
    location: "India"
  },
  {
    title: "Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria",
    desc: "Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone",
    sector: "Water & Sanitation",
    location: "India"
  },
  {
    title: "Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria",
    desc: "Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone",
    sector: "Roads & Highways",
    location: "Nigeria"
  },
  {
    title: "Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria",
    desc: "Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone",
    sector: "Roads & Highways",
    location: "Nigeria"
  },
  {
    title: "Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria",
    desc: "Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone",
    sector: "Roads & Highways",
    location: "Nigeria"
  },
  {
    title: "Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria",
    desc: "Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone",
    sector: "Rail & Metro",
    location: "Africa"
  },
  {
    title: "Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria",
    desc: "Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone",
    sector: "Rail & Metro",
    location: "Africa"
  },
  {
    title: "Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria",
    desc: "Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone",
    sector: "Energy",
    location: "Oman"
  },

]

export default function ProjectPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption);
  };  
  const filteredProjects = allProjects.filter(project => {
    const matchesLocation = selectedOption ? project.location === selectedOption.label : true;
    const matchesSector = selectedOption2 ? project.sector === selectedOption2.label : true;
    return matchesLocation && matchesSector;
  });
  useEffect(() => {
          if(typeof window !== 'undefined' && window.innerWidth > 1007) {
              enterView({
                  selector: '[data-animate]',
                  offset: 0,
                  enter: (el) =>  {
                      el.classList.add('kmr-animate')
                  },
                  exit: (el) => {
                      el.classList.remove('kmr-animate');
                  }
              })
          }
      }, [])
    return(
        <main>
            <div className="banner project-banner center-banner">
                <div className="bg">
                    <video playsInline autoPlay muted loop width="100%" height="100%">
                        <source src="/assets/video/projects-banner.mp4" type="video/mp4" />
                    </video>
                    <div className="banner-wrapper">
                        <div className="container">
                            <div className="heading" data-animate="fade-up">
                                <h2>Projects</h2>
                                <p>Team Infraplus has global experience of working in more than 30 countries in Africa, Middle East and Southeast Asia.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filter-strip">
                    <div className="filters">
                    <Select 
                        placeholder="Location"
                        options={options}
                        value={selectedOption}
                        onChange={handleChange}
                        styles={customStyles}
                        components={{
                            IndicatorSeparator: () => null 
                          }}
                      ></Select>
                      {selectedOption && <label>{selectedOption.label}</label>}
                    <Select 
                        placeholder="Sectors"
                        options={options2}
                        value={selectedOption2}
                        onChange={setSelectedOption2}
                        styles={customStyles}
                        components={{
                            IndicatorSeparator: () => null 
                          }}
                      ></Select>
                      {selectedOption2 && <label>{selectedOption2.label}</label>}
                      <div className="search-input">
                        <input type="text" placeholder='Search Keyword' name="" id="" />
                        <button className='search'>Search</button>
                      </div>
                    </div>
                </div>
            </div>
            <section>
              <div className="projects-secA sec-pad">
                  <div className="container">
                      <div className="over-hidden">
                         <div className='listing-grid' data-animate="zoom-out">
                            {
                              filteredProjects.length > 0 ? (
                                filteredProjects.map((project, index) => (
                                  <ProjectListing
                                  key={index}
                                  title={project.title}
                                  desc={project.desc}
                                  sector={project.sector}
                                  />
                                 ))
                                 ) : (
                                  <NotFound
                                  title="Error"
                                  desc="No Blogs Found"
                                  />
                                 )
                            }
                         </div>
                      </div>
                      <button className='loadBtn'>
                        <img src="/assets/icon/logo-grad.svg" alt="" />
                        Load more..
                      </button>
                  </div>
              </div>
            </section>
        </main>
    )
}