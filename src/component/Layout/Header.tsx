import { FC, useState } from "react";
import {
  Tooltip,
  Avatar,
  Container,
  IconButton,
  AppBar,
  Toolbar,
  CssBaseline,
  useScrollTrigger,
  Slide,
  Grid,
} from "@mui/material";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const HideOnScroll = (props: Props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Header: FC = (props) => {
  const [_, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ backgroundColor: "#272727" }}>
          <Container maxWidth="xl">
            <Toolbar
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              <Grid display={"flex"}>
                <img
                  className="w-24"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                  alt=""
                />
                <img
                  className="w-24 ml-3 h-10"
                  src="	https://reactflix.anthonyperuso.me/tmdb-logo.svg"
                  alt=""
                />
              </Grid>
              <Grid>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Gaurav Sali"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default Header;
