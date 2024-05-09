// COMPONENTS
import { AppBar, Button, Container, Toolbar, Box } from "@/material/index";

// COMPONENTS
import Image from "next/image";
import Link from "next/link";

import UserTooltopClient from "./UserTooltipClient";
import MenuTooltipClient from "./MenuTooltipClient"


// CONSTANS
import {PAGES} from "./constants";

// TYPES
import type { FC } from "react";


const MainHeader: FC = () => {
  return (
    <AppBar position="static" color="transparent" elevation={3}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box className="flex flex-1 gap-4">
            <Link href='/' className="flex justify-center">
            <Image
              src="/images/svgs/logo.svg"
              alt="website logo"
              priority
              width={150}
              height={100}
              className="mt-2"
            />
            </Link>

            <Box
              sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
            >
              {PAGES.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>

          <Box className="flex items-center">
            <UserTooltopClient />
            <MenuTooltipClient />
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MainHeader;
