const jsonServer = require('json-server')

const EmployeePortalServer = jsonServer.create()

const router = jsonServer.router('db.json')

const middleware = jsonServer.defaults()

const PORT = 3000 || process.env.PORT

EmployeePortalServer.use(middleware)

EmployeePortalServer.use(router)

EmployeePortalServer.listen(PORT,()=>{
    console.log('employee running success');
})