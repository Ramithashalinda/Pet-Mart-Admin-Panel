import * as React from 'react';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { confirmAlert } from 'react-confirm-alert';
import Avatar from '@mui/material/Avatar';
import 'react-confirm-alert/src/react-confirm-alert.css';

const rows = [
    {
        id: 1,
        pimage: 'https://lh3.googleusercontent.com/a/AEdFTp5ghsh9oCkJti8C2uENC5fmmWB7dngWBfzoWyQMKw=s96-c',
        pId: 103673433880979263357,
        pName: 'Ramitha Wanninayake',
        pEmail: 'ramithashalinda99@gmail.com',
        pCreateAt: '22022-12-30 03:16:07'
    },
    {
        id: 2,
        pimage: 'https://lh3.googleusercontent.com/a/AEdFTp7gQ7_DJk4fO8PqrIV6XSbGkF62Z4n1yewACRp4=s96-c',
        pId: 103772132989692632891,
        pName: 'Remo Shali',
        pEmail: 'remoshali1999@gmail.com',
        pCreateAt: '222022-12-28 03:13:04'
    }
    // {
    //     id: 3,
    //     pimage: 'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png',
    //     pId: 3,
    //     pName: 'Ramitha Wanninayake',
    //     pEmail: 'ramitha99@gmail.com',
    //     pCreateAt: '2012-02-13'
    // }
];

function ComponentTypography() {
    const [row, setRow] = React.useState(rows);

    const handleDeleteClick = (id) => () => {
        confirmAlert({
            title: 'Are you sure ?',
            message: 'Do you want to delete this user account ?',
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
            field: 'pimage',
            headerName: 'Image',
            width: 100,
            renderCell: (params) => {
                console.log(params);
                return (
                    <>
                        <Avatar src={params.value} />

                        {console.log('image value  ', params.value)}
                    </>
                );
            }
        },
        { field: 'pId', headerName: 'Id', width: 200 },
        { field: 'pName', headerName: 'Name', width: 200 },
        { field: 'pEmail', headerName: 'Email', width: 200 },
        {
            field: 'pCreateAt',
            headerName: 'Create At',
            type: 'date',
            width: 180
        },
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
            <DataGrid rows={row} columns={columns} editMode="row" />
        </div>
    );
}

export default ComponentTypography;
