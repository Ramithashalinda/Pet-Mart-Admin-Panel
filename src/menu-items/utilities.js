// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined,
    UsergroupDeleteOutlined,
    FolderViewOutlined,
    UploadOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined,
    UsergroupDeleteOutlined,
    FolderViewOutlined,
    UploadOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'User List',
            type: 'item',
            url: '/user',
            icon: icons.UsergroupDeleteOutlined
        },
        {
            id: 'util-color',
            title: 'Post List',
            type: 'item',
            url: '/postList',
            icon: icons.FolderViewOutlined
        },
        {
            id: 'util-shadow',
            title: 'Upload Notice',
            type: 'item',
            url: '/uploadNotice',
            icon: icons.UploadOutlined
        }
        // {
        //     id: 'ant-icons',
        //     title: 'Ant Icons',
        //     type: 'item',
        //     url: '/icons/ant',
        //     icon: icons.AntDesignOutlined,
        //     breadcrumbs: false
        // }
    ]
};

export default utilities;
