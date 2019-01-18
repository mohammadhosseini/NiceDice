const { Component, PropTypes, Children } = React

// Navigation Top Parent Component
const Navigation = ({ children }) => {
  children = React.Children.toArray(children)
  console.log('children', children)
  
  function itemToComp(item, index) {
    if (item.type.name === 'NavLink') {
      return <NavLink {...item.props} key={index} />
    }  else {
      console.log('fail')
    }
  }
  
  return (
    <nav className='navbar'>
      {children.map(itemToComp)}
    </nav>
  )
}

Navigation.propTypes = {
  children: PropTypes.object.isRequired,
}


// Simple NavLink Item
const NavLink = ({ text, url }) => {
  return <a href={url}>{text}</a>
}

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}


// Define Navbar with JSX
const Test = () => (
  <Navigation>
    <NavLink text='Home' url='#'/>
    <NavLink text='About Us' url='#'/>
  </Navigation>
)


// Define Navbar with JSON
const json = [
  { type: 'link', text: 'Home', url: '#' },
  { type: 'link', text: 'About Us', url: '#' },
]
  
function JSONToNav(json) {
  return (
    <Navigation>
      {json.map(itemToComp)}
    </Navigation>
  )
}

function itemToComp(item) {
  if (item.type === 'link') {
    return JSONToLink(item)
  } 
}

function JSONToLink(json) {
  return <NavLink text={json.text} url={json.url} />
}


// JSX Navbar
// ReactDOM.render(
// 	<Test />,
// 	document.querySelector('#app')
// )

// JSON Navbar
// ReactDOM.render(
// 	JSONToNav(json),
// 	document.querySelector('#app')
// )
