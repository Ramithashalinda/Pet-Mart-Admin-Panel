import * as React from 'react';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { confirmAlert } from 'react-confirm-alert';
import Avatar from '@mui/material/Avatar';
import 'react-confirm-alert/src/react-confirm-alert.css';

const rows = [
    {
        id: 1,
        image: 'https://firebasestorage.googleapis.com/v0/b/petsmart-a4838.appspot.com/o/uploads%2F1672401845711.jpg?alt=media&token=fc8910b1-ce45-4297-8443-53cfb30acd7f',
        category: 'Pet',
        animalType: 'Bird',
        title: 'eclectus ',
        district: 'Kandy',
        phoneNumber: '712541463',
        price: '25000',
        description: 'Call me more details',
        uploadAT: '2022-12-30 17:34:15',
        userId: '103673433880979263357'
    },
    {
        id: 2,
        image: 'https://firebasestorage.googleapis.com/v0/b/petsmart-a4838.appspot.com/o/uploads%2F1672400638516.jpg?alt=media&token=723161c5-69a4-4359-8c0e-5ac2fc1fb7f3',
        category: 'Pet',
        animalType: 'Dog',
        title: 'Labrador Retriever Puppy',
        district: 'Gampaha',
        phoneNumber: '777149213',
        price: '45000',
        description: 'Original Labrador Retriever female puppies Big headBig bones Very healthy',
        uploadAT: '2022-12-30 17:14:04',
        userId: '103673433880979263357'
    },
    {
        id: 3,
        image: 'https://firebasestorage.googleapis.com/v0/b/petsmart-a4838.appspot.com/o/uploads%2F1672400806880.jpg?alt=media&token=babfc807-206a-49ae-b1b0-103723c483dc',
        category: 'Pet',
        animalType: 'Dog',
        title: 'German Shepherd Puppies',
        district: 'Kalutara',
        phoneNumber: '779647852',
        price: '36500',
        description: 'Male and female, Bloodline',
        uploadAT: '2022-12-30 17:16:51',
        userId: '103673433880979263357'
    },
    {
        id: 4,
        image: 'https://firebasestorage.googleapis.com/v0/b/petsmart-a4838.appspot.com/o/uploads%2F1672402109806.jpg?alt=media&token=11a5f796-1f6d-492f-962f-6234ca3753a9',
        category: 'Pet',
        animalType: 'Fish',
        title: 'Fahaka Puffer Fish',
        district: 'Kandy',
        phoneNumber: '770874545',
        price: '20000',
        description: 'Size - round 4-4.5 inches',
        uploadAT: '2022-12-30 17:38:34',
        userId: '103673433880979263357'
    },
    {
        id: 5,
        image: 'https://firebasestorage.googleapis.com/v0/b/petsmart-a4838.appspot.com/o/uploads%2F1672400806880.jpg?alt=media&token=babfc807-206a-49ae-b1b0-103723c483dc',
        category: 'Pet',
        animalType: 'Dog',
        title: 'German Shepherd Puppies',
        district: 'Kalutara',
        phoneNumber: '779647852',
        price: '36500',
        description: 'Male and female, Bloodline',
        uploadAT: '2022-12-30 17:16:51',
        userId: '103673433880979263357'
    }
];

function ComponentColor() {
    const [row, setRow] = React.useState(rows);

    const handleDeleteClick = (id) => () => {
        confirmAlert({
            title: 'Are you sure ?',
            message: 'Do you want to delete this post item ?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => setRow(row.filter((row1) => row1.id !== id))
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });
    };
    const columns = [
        {
            field: 'image',
            headerName: 'Image',
            width: 120,
            renderCell: (params) => {
                console.log(params);
                return (
                    <>
                        <Avatar src={params.value} variant="rounded" sx={{ width: 80, height: 80 }} />
                    </>
                );
            }
        },
        { field: 'category', headerName: 'Category', width: 100 },
        { field: 'animalType', headerName: 'Animal Type', width: 100 },
        { field: 'title', headerName: 'Title', width: 100 },
        { field: 'district', headerName: 'District', width: 100 },
        { field: 'phoneNumber', headerName: 'Phone Number', width: 100 },
        { field: 'price', headerName: 'Price', width: 100 },
        { field: 'description', headerName: 'Description', width: 100 },
        {
            field: 'uploadAT',
            headerName: 'upload AT',
            type: 'date',
            width: 180
        },
        { field: 'userId', headerName: 'User Id', width: 100 },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            sortable: true,
            width: 100,
            headerAlign: 'center',
            filterable: true,
            align: 'center',
            disableColumnMenu: true,
            disableReorder: true,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                return [<GridActionsCellItem icon={<DeleteIcon />} onClick={handleDeleteClick(id)} label="Delete" />];
            }
        }
    ];
    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid rowHeight={100} rows={row} columns={columns} editMode="row" />
        </div>
    );
}

export default ComponentColor;
