function getAllUsers() {
  try {
    axios("https://jsonplaceholder.typicode.com/users").then((response) =>
      console.log(response.data)
    );
  } catch (error) {
    console.log(error);
  }
}
getAllUsers();

let deleteCustomers = async (id) => {
  try {
    await axios.delete(`https://northwind.vercel.app/api/customers/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};
deleteCustomers("BOLId");

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

async function getAllUsers1() {
  try {
    let response = await instance.get("users");
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
}
getAllUsers1();

const axiosInstance = axios.create({
  baseURL: "https://northwind.vercel.app/api/",
  timeout: 2000,
  headers: { "X-Custom-Header": "foobar" },
});

async function getUDeleteCustomer(id) {
  try {
      let response = await axiosInstance.delete(`customers/${id}`);
      console.log(response);
      
  } catch (error) {
    console.log(error.message);
  }
}  
getUDeleteCustomer("AROUT");
