import React from "react"

class Filters extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      search: "",         
      filterBy: "name"    
    }    
  } 

  handleSearch = () => {  
    const search = this.state.search.toLowerCase()
    const filterBy = this.state.filterBy
    const { contacts, contactsSafe, handler } = this.props   

    handler(contactsSafe)

    if (search !== "") {
      const contactsFiltered = contacts.filter((contact) => {   
        const prop = contact[filterBy].toLowerCase() 
        return search.includes(prop)
      }) 

      handler(contactsFiltered)
    }    
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value,      
    })
  }

  handleFilter = (filterBy) => {    
    const { contacts, handler } = this.props       

    const sorted = contacts.sort((a,b) => {
      return a[filterBy] < b[filterBy] ? -1 : a[filterBy] > b[filterBy] ? 1 : 0;      
    }) 

    handler(sorted)

    return this.setState({ 
      filterBy: filterBy,       
    })
  }

  render() {   
    const {search, filterBy} = this.state          
        
    return (               
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              onChange={this.handleChange}    
              value={search}    
            />

            <button onClick={ this.handleSearch } className="filters__search__icon">
              <i className="fa fa-search" />                              
            </button>
          </div>
                                                                        
          <button onClick={ () => this.handleFilter('name') } className={`filters__item ${filterBy === 'name' && 'is-selected'}`}>
            Nome <i className="fas fa-sort-down" />
          </button>

          <button onClick={ () => this.handleFilter('country') } className={`filters__item ${filterBy === 'country' && 'is-selected'}`}>
            País <i className="fas fa-sort-down" />
          </button>

          <button onClick={ () => this.handleFilter('company') } className={`filters__item ${filterBy === 'company' && 'is-selected'}`}>
            Empresa <i className="fas fa-sort-down" />
          </button>

          <button onClick={ () => this.handleFilter('department') } className={`filters__item ${filterBy === 'department' && 'is-selected'}`}>
            Departamento <i className="fas fa-sort-down" />
          </button>

          <button onClick={ () => this.handleFilter('admissionDate') } className={`filters__item ${filterBy === 'admissionDate' && 'is-selected'}`}>
            Data de admissão <i className="fas fa-sort-down" />
          </button>
        </section>
      </div>
    )
  }
}

export default Filters
