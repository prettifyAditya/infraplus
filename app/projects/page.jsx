"use client"
import ProjectListing from '@/components/ProjectListing';
import '@/styles/project/project.css'
import { useEffect ,useState } from 'react';
import Select from "react-select";
import enterView from 'enter-view';
import '../../public/assets/css/animate.css'

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
      padding: "6px 10px",
      color: state.isFocused ? "#fff" : "#000",
      "&:hover": {
        borderColor: "#000",
        color: "#fff"
      }
    }),
  menu: (base) => ({
  ...base,
  zIndex: 10,
  })
}

const options = [
  { value: "option 1", label: "option 1"},
  { value: "option 2", label: "option 2"},
  { value: "option 3", label: "option 3"},
]
const options2 = [
  { value: "option 1", label: "option 1"},
  { value: "option 2", label: "option 2"},
  { value: "option 3", label: "option 3"},
]

export default function ProjectPage() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log('Selected:', selectedOption);
  };  
  const location = [
    { value: 'India', label: 'India'},
    { value: 'Canada', label: 'Canada' },
    { value: 'United States of America', label: 'United States of America' },
    { value: 'Mexio', label: 'Mexico' },
  ]
  const sectors = [
    { value: 'Water & Sanitation', label: 'Water & Sanitation' },
    { value: 'Telecomm', label: 'Telecomm'},
    { value: 'Roads & Highways', label: 'Roads & Highways' },
    { value: 'Rail & Metro', label: 'Rail & Metro' },
    { value: 'Energy', label: 'Energy' },
  ]
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
                        placeholder="Apply for"
                        options={options}
                        value={selectedOption}
                        onChange={setSelectedOption}
                        styles={customStyles}
                        components={{
                            IndicatorSeparator: () => null 
                          }}
                      ></Select>
                      {selectedOption && <label>{selectedOption.label}</label>}
                    <Select 
                        placeholder="Apply for"
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
                      <div className="listing-grid">
                         <ProjectListing 
                         title={"Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria"}
                         desc={"Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone"}
                         sector={"Highways, Bridges & Tunnels"} />
                         <ProjectListing 
                         title={"Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria"}
                         desc={"Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone"}
                         sector={"Highways, Bridges & Tunnels"} />
                         <ProjectListing 
                         title={"Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria"}
                         desc={"Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone"}
                         sector={"Highways, Bridges & Tunnels"} />
                         <ProjectListing 
                         title={"Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria"}
                         desc={"Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone"}
                         sector={"Highways, Bridges & Tunnels"} />
                         <ProjectListing 
                         title={"Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria"}
                         desc={"Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone"}
                         sector={"Highways, Bridges & Tunnels"} />
                         <ProjectListing 
                         title={"Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria"}
                         desc={"Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone"}
                         sector={"Highways, Bridges & Tunnels"} />
                         <ProjectListing 
                         title={"Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria"}
                         desc={"Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone"}
                         sector={"Highways, Bridges & Tunnels"} />
                         <ProjectListing 
                         title={"Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria"}
                         desc={"Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone"}
                         sector={"Highways, Bridges & Tunnels"} />
                         <ProjectListing 
                         title={"Abuja Kaduna Expressway, Kaduna (1510 Ha), Kaduna, Nigeria"}
                         desc={"Techno Economic Feasibility Study, Master Planning and Design of Infrastructure Services of Green Agro Allied Economic Zone"}
                         sector={"Highways, Bridges & Tunnels"} />
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