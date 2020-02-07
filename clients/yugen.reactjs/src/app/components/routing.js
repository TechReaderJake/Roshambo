import React from 'react'
//import { Switch, Route, NavLink } from 'react-router-dom'
import { Link, Router } from '@reach/router'
import { MdHome, MdSettings, MdInfo, MdWeb, MdEmail, MdAssignment, MdArrowForward, MdAdd } from 'react-icons/md'
import Breadcrumb from './breadcrumb'

const NavLink = props => (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          style: {
            color: isCurrent ? "red" : "blue"
          }
        };
      }}
    />
);

const options = {
icons: {
    Worlds: MdHome,
    Users: MdSettings,
    About: MdInfo,
    Blog: MdWeb,
    Contact: MdEmail,
    Dashboard: MdAssignment,
},
items: [
    { to: '/', label: 'Worlds' },
    { to: '/users', label: 'Users' },
    { to: '/dashboard/about', label: 'About' },
    { to: '/blog', label: 'Blog'},
    { to: '/contact', label: 'Contact'},
    { to: '/dashboard', label: 'Dashboard'},
],
}

const Routing = () => (
    <div className='content'>
        <Breadcrumb separator='/'>
          {options.items.map(({ to, label }) => {
            const Icon = options.icons[label]
            return (
              <div key={to} className='d-flex'>
                {Icon && <Icon />}
                <NavLink to={to}>{label}</NavLink>
              </div>
            )
          })}
        </Breadcrumb>
        <Router>
          <Home path='/' />
          <Users path={options.items[1].to} />
          <About path={options.items[2].to} />
          <About path={options.items[3].to} />
          <About path={options.items[4].to} />
          <About path={options.items[5].to} />
        </Router>
    </div>
)

export default Routing

function Home() {
    return (
      <h1>Hello Home!</h1>
    )
}
function About() {
    return (
      <div class="grid-row">
        <div class="grid-item">
          <a class="wrapping-link" href="https://thecodeteam.com/projects/rex-ray/"></a>
          <div class="grid-item-wrapper">
            <div class="grid-item-container">
              <div class="grid-image-top rex-ray">
                <span class="grid-image"></span>
              </div>
              <div class="grid-item-content">
                <span class="item-title">REX-Ray</span>
                <span class="more-info">View World <i><MdArrowForward /></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-item">
          <a class="wrapping-link" href="https://www.dell.com/learn/us/en/555/campaigns/xps-linux-laptop_us" target="_blank"></a>	   
          <div class="grid-item-wrapper">
            <div class="grid-item-container">
              <div class="grid-image-top sputnik">
                <span class="centered project-image-bg sputnik-image"></span>
              </div>
              <div class="grid-item-content">
                <span class="item-title">Sputnik</span>
                <span class="item-category">Developer System</span>
                <span class="item-excerpt">A developer focused laptop with a pre-installed and fully support Ubuntu im...</span>
                <span class="more-info">View Project <i class="fas fa-long-arrow-alt-right"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-item">
          <a class="wrapping-link" href="https://www.edgexfoundry.org/" target="_blank"></a>
          <div class="grid-item-wrapper">
            <div class="grid-item-container">
              <div class="grid-image-top edgex">
                <span class="centered project-image-bg edgex-image"></span>
              </div>
              <div class="grid-item-content">
                <span class="item-title">EdgeX Foundry</span>
                <span class="item-category">Internet of Things</span>
                <span class="item-excerpt">A vendor-neutral open source project building a common open framework for I...</span>
                <span class="more-info">View Project <i class="fas fa-long-arrow-alt-right"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-item">
          <a class="wrapping-link" href="https://www.openswitch.net/" target="_blank"></a>
          <div class="grid-item-wrapper">
            <div class="grid-item-container">
              <div class="grid-image-top openswitch">
                <span class="centered project-image-bg openswitch-image"></span>
              </div>
              <div class="grid-item-content">
                <span class="item-title">OpenSwitch</span>
                <span class="item-category">Software Based Infrastructure</span>
                <span class="item-excerpt">The OpenSwitch platform is an open source, Linux-based network operating sy...</span>
                <span class="more-info">View Project <i class="fas fa-long-arrow-alt-right"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-item">
          <a class="wrapping-link" href="https://github.com/kubernetes/kubernetes/tree/master/examples/volumes/scaleio" target="_blank"></a>
          <div class="grid-item-wrapper">
            <div class="grid-item-container">
              <div class="grid-image-top scaleio">
                <span class="centered project-image-bg scaleio-image"></span>
              </div>
              <div class="grid-item-content">
                <span class="item-title">K8s + ScaleIO</span>
                <span class="item-category">Infrastructure as Code</span>
                <span class="item-excerpt">Configure Kubernetes resources to consume storage from volumes hosted on Sc...</span>
                <span class="more-info">View Project <i class="fas fa-long-arrow-alt-right"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-item">
          <a class="wrapping-link" href="https://thecodeteam.com/projects/container-storage-interface/"></a>
          <div class="grid-item-wrapper">
            <div class="grid-item-container">
              <div class="grid-image-top csi">
                <span class="centered project-image-bg csi-image"></span>
              </div>
              <div class="grid-item-content">
                <span class="item-title">Container Storage Interface</span>
                <span class="item-category">Software Based Infrastructure</span>
                <span class="item-excerpt">A universal storage interface  allowing easy interoperability between conta...</span>
                <span class="more-info">View Project <i class="fas fa-long-arrow-alt-right"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-item">
          <a class="wrapping-link" href="https://thecodeteam.com/projects/kubernetes/"></a>
          <div class="grid-item-wrapper">
            <div class="grid-item-container">
              <div class="grid-image-top kubernetes">
                <span class="centered project-image-bg kubernetes-image"></span>
              </div>
              <div class="grid-item-content">
                <span class="item-title">Kubernetes</span>
                <span class="item-category">Software Based Infrastructure</span>
                <span class="item-excerpt">An open-source system for automating deployment, scaling, and management of...</span>
                <span class="more-info">View Project <i class="fas fa-long-arrow-alt-right"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-item">
          <a class="wrapping-link" href="https://grpc.io/" target="_blank"></a>
          <div class="grid-item-wrapper">
            <div class="grid-item-container">
              <div class="grid-image-top grpc">
                <span class="centered project-image-bg grpc-image"></span>
              </div>
              <div class="grid-item-content">
                <span class="item-title">GRPC</span>
                <span class="item-category">Tools and Libraries</span>
                <span class="item-excerpt">A high performance, open source, general-purpose RPC framework.</span>
                <span class="more-info">View Project <i class="fas fa-long-arrow-alt-right"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-item" title="Envoy">
          <a class="wrapping-link" href="https://thecodeteam.com/projects/envoy/"></a>
          <div class="grid-item-wrapper">
            <div class="grid-item-container">
              <div class="grid-image-top envoy">
                <span class="centered project-image-bg envoy-image"></span>
              </div>
              <div class="grid-item-content">
                <span class="item-title">Envoy</span>
                <span class="item-category">Software Based Infrastructure</span>
                <span class="item-excerpt">An open source edge and service proxy, from the developers at Lyft.</span>
                <span class="more-info">View Project <i class="fas fa-long-arrow-alt-right"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-item">
          {/* <a class="wrapping-link" href="https://thecodeteam.com/projects/istio/"></a>
          <div class="grid-item-wrapper">
            <div class="grid-item-container">
              <div class="grid-image-top istio">
                <span class="centered project-image-bg istio-image"></span>
              </div>
              <div class="grid-item-content">
                <span class="item-title">Istio</span>
                <span class="item-category">Software Based Infrastructure</span>
                <span class="item-excerpt">Connect, secure, control, and observe services.</span>
                <span class="more-info">View Project <i class="fas fa-long-arrow-alt-right"></i></span>
              </div>
            </div>
          </div> */}
            <div class="action-btn" title="Create World"><MdAdd /></div>
        </div>
      </div>
    )
}

function Users() {
    return <h2>Users</h2>;
}