import * as React from 'react';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { confirmAlert } from 'react-confirm-alert';
import Avatar from '@mui/material/Avatar';
import 'react-confirm-alert/src/react-confirm-alert.css';
import UploadFiles from './upload-files.component';

const rows = [
    {
        id: 1,
        image: 'https://firebasestorage.googleapis.com/v0/b/petsmart-a4838.appspot.com/o/uploads%2F1672463111211.jpg?alt=media&token=a2b39b80-53d7-4c2a-841c-92c708830af5',
        name: 'notice 1',
        createAt: '2012-02-12'
    },
    {
        id: 2,
        image: 'https://firebasestorage.googleapis.com/v0/b/petsmart-a4838.appspot.com/o/uploads%2F1672463137490.jpg?alt=media&token=c38fea18-ad52-43c0-b591-ea4a1a66bddb',
        name: 'notice 2',
        createAt: '2012-02-11'
    },
    {
        id: 3,
        image: 'https://firebasestorage.googleapis.com/v0/b/petsmart-a4838.appspot.com/o/uploads%2F1672463089988.jpg?alt=media&token=13c13d6f-8eee-4307-90a0-fa66b2792edb',
        name: 'notice 3',
        createAt: '2012-02-03'
    }
];

function ComponentShadow() {
    const [row, setRow] = React.useState(rows);

    const handleDeleteClick = (id) => () => {
        confirmAlert({
            title: 'Are you sure ?',
            message: 'Do you want to delete this Notice ?',
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
        { field: 'name', headerName: 'Name', width: 100 },
        {
            field: 'createAt',
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
        <div>
            <UploadFiles />
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid rowHeight={100} rows={row} columns={columns} editMode="row" />
            </div>
        </div>
    );
}

export default ComponentShadow;
