import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatter'


const MENU_STYLE = {
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    backgroundColor: 'primary.50'
  }
}

function BoardBar({ board }) {
  return (
    <Box sx={{
      // display: { xs: 'none', md: 'flex', gap: 1 },
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      padding: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')

    }}>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label={board?.title}
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>

        <AvatarGroup
          max={7}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0de' }
            }
          }}
        >
          <Tooltip title="Quang2802">
            <Avatar alt="Quang2802" src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-1/448961556_1703774890365742_6186321680900832134_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=pRBLkZ0kC5EQ7kNvgGa6ls4&_nc_ht=scontent.fhan5-10.fna&oh=00_AYDQLyKz0bmrfnO0BGEkpVLQatgYRVGBUe0pRFLz5box1Q&oe=66B822E1" />
          </Tooltip>
          <Tooltip title="Quang2802">
            <Avatar alt="Quang2802" src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-1/448961556_1703774890365742_6186321680900832134_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=pRBLkZ0kC5EQ7kNvgGa6ls4&_nc_ht=scontent.fhan5-10.fna&oh=00_AYDQLyKz0bmrfnO0BGEkpVLQatgYRVGBUe0pRFLz5box1Q&oe=66B822E1" />
          </Tooltip>
          <Tooltip title="Quang2802">
            <Avatar alt="Quang2802" src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-1/448961556_1703774890365742_6186321680900832134_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=pRBLkZ0kC5EQ7kNvgGa6ls4&_nc_ht=scontent.fhan5-10.fna&oh=00_AYDQLyKz0bmrfnO0BGEkpVLQatgYRVGBUe0pRFLz5box1Q&oe=66B822E1" />
          </Tooltip>
          <Tooltip title="Quang2802">
            <Avatar alt="Quang2802" src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-1/448961556_1703774890365742_6186321680900832134_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=pRBLkZ0kC5EQ7kNvgGa6ls4&_nc_ht=scontent.fhan5-10.fna&oh=00_AYDQLyKz0bmrfnO0BGEkpVLQatgYRVGBUe0pRFLz5box1Q&oe=66B822E1" />
          </Tooltip>
          <Tooltip title="Quang2802">
            <Avatar alt="Quang2802" src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-1/448961556_1703774890365742_6186321680900832134_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=pRBLkZ0kC5EQ7kNvgGa6ls4&_nc_ht=scontent.fhan5-10.fna&oh=00_AYDQLyKz0bmrfnO0BGEkpVLQatgYRVGBUe0pRFLz5box1Q&oe=66B822E1" />
          </Tooltip>
          <Tooltip title="Quang2802">
            <Avatar alt="Quang2802" src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-1/448961556_1703774890365742_6186321680900832134_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=pRBLkZ0kC5EQ7kNvgGa6ls4&_nc_ht=scontent.fhan5-10.fna&oh=00_AYDQLyKz0bmrfnO0BGEkpVLQatgYRVGBUe0pRFLz5box1Q&oe=66B822E1" />
          </Tooltip>
          <Tooltip title="Quang2802">
            <Avatar alt="Quang2802" src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-1/448961556_1703774890365742_6186321680900832134_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=pRBLkZ0kC5EQ7kNvgGa6ls4&_nc_ht=scontent.fhan5-10.fna&oh=00_AYDQLyKz0bmrfnO0BGEkpVLQatgYRVGBUe0pRFLz5box1Q&oe=66B822E1" />
          </Tooltip>
          <Tooltip title="Quang2802">
            <Avatar alt="Quang2802" src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-1/448961556_1703774890365742_6186321680900832134_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=pRBLkZ0kC5EQ7kNvgGa6ls4&_nc_ht=scontent.fhan5-10.fna&oh=00_AYDQLyKz0bmrfnO0BGEkpVLQatgYRVGBUe0pRFLz5box1Q&oe=66B822E1" />
          </Tooltip>
          <Tooltip title="Quang2802">
            <Avatar alt="Quang2802" src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-1/448961556_1703774890365742_6186321680900832134_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=pRBLkZ0kC5EQ7kNvgGa6ls4&_nc_ht=scontent.fhan5-10.fna&oh=00_AYDQLyKz0bmrfnO0BGEkpVLQatgYRVGBUe0pRFLz5box1Q&oe=66B822E1" />
          </Tooltip>
          <Tooltip title="Quang2802">
            <Avatar alt="Quang2802" src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-1/448961556_1703774890365742_6186321680900832134_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=pRBLkZ0kC5EQ7kNvgGa6ls4&_nc_ht=scontent.fhan5-10.fna&oh=00_AYDQLyKz0bmrfnO0BGEkpVLQatgYRVGBUe0pRFLz5box1Q&oe=66B822E1" />
          </Tooltip>
          <Tooltip title="Quang2802">
            <Avatar alt="Quang2802" src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-1/448961556_1703774890365742_6186321680900832134_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=pRBLkZ0kC5EQ7kNvgGa6ls4&_nc_ht=scontent.fhan5-10.fna&oh=00_AYDQLyKz0bmrfnO0BGEkpVLQatgYRVGBUe0pRFLz5box1Q&oe=66B822E1" />
          </Tooltip>
          <Tooltip title="Quang2802">
            <Avatar alt="Quang2802" src="https://scontent.fhan5-10.fna.fbcdn.net/v/t39.30808-1/448961556_1703774890365742_6186321680900832134_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=pRBLkZ0kC5EQ7kNvgGa6ls4&_nc_ht=scontent.fhan5-10.fna&oh=00_AYDQLyKz0bmrfnO0BGEkpVLQatgYRVGBUe0pRFLz5box1Q&oe=66B822E1" />
          </Tooltip>
        </AvatarGroup>
      </Box>

    </Box>
  )
}

export default BoardBar