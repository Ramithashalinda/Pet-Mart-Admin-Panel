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
        image: 'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png',
        name: 'Test notice',
        createAt: '2012-02-13'
    },
    {
        id: 2,
        image: 'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png',
        name: 'Test notice',
        createAt: '2012-02-13'
    },
    {
        id: 3,
        image: 'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png',
        name: 'Test notice',
        createAt: '2012-02-13'
    }
];

function ComponentShadow() {
    const [row, setRow] = React.useState(rows);

    const handleDeleteClick = (id) => () => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
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
