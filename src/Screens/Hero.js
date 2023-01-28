import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Table, Button, Form, Stack} from 'react-bootstrap';

function Hero() {    
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [originalData, setOriginalData] = useState([]);
    
    useEffect(()=>{
        axios
        .get("https://19104008-mhs.bdv.or.id/api/heroes.php")
        .then(res => {console.log(res)
                    setData(res.data)
                    setOriginalData(res.data)})
        .catch(err => {console.log(err)})
    }, [])

    const handleChange = e => {
        const value = e.target.value;                
        setSearchTerm(e.target.value);
        const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setData(filteredData);
        if (value === "") {
            setData(originalData);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        const filteredData = originalData.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setData(filteredData);
    };

    // const handleReset = e => {
    //     e.preventDefault();
    //     const filteredData = originalData.filter(item =>
    //       item.name.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    //     setData(filteredData);
    // };

    return (
        <Container>
            <br/>
            <h2>Pahlawan Indonesia</h2>
            <br/>
            <p>
                Table dibawah menampilan data Pahlawan yang pernah ada di Indonesia
            </p>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Control sz="sm" type="text" placeholder="Search by name" onChange={handleChange} value={searchTerm} />
                    <br/>
                    {/* <Stack direction='horizontal' gap={3}>
                        <Button type="submit">Search</Button>                    
                        <Button type="reset" onClick={handleReset}>Reset</Button>
                    </Stack>                     */}
                    <br/>   
                </Form>
                <Table responsive>
                <thead> 
                    <tr>
                        <th>#</th>
                        <th>Nama</th>
                        <th>Birth Year</th>
                        <th width='100'>Death Year</th>
                        <th width='150'>Ascension Year</th>
                        <th>Description</th>                        
                    </tr>
                </thead>
                {data.map((item, index) => (
                <tbody>
                    <tr key={item.key}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.birth_year}</td>
                        <td>{item.death_year}</td>
                        <td>{item.ascension_year}</td>
                        <td>{item.description}</td>
                    </tr>
                </tbody>
                ))}                
                </Table>                
            </div>            
        </Container>
    )
}

export default Hero