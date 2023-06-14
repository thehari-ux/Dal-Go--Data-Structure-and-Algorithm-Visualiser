import Head from 'next/head';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CompanyCard } from 'src/sections/companies/company-card';
import { CompaniesSearch } from 'src/sections/companies/companies-search';

const companies = [
  {
    id: '2569ce0d517a7f06d3ea1f24',
    createdAt: '27/03/2019',
    description: 'A software tool that helps users to better understand how different sorting algorithms work by visualizing the sorting process in real-time.',
    logo: '',
    title: 'Sorting Visualiser',
    downloads: '',
    proxy: 'http://localhost:3001' //change the proxy accordingly
  },
  {
    id: 'ed2b900870ceba72d203ec15',
    createdAt: '31/03/2019',
    description: 'A software tool that helps users to find the shortest path between two points in a graph or a network.',
    logo: '',
    title: 'Path Finder',
    downloads: '',
    proxy: 'http://localhost:5173/'   //change the proxy accordingly

  },
  {
    id: 'a033e38768c82fca90df3db7',
    createdAt: '03/04/2019',
    description: 'a software tool that helps users to better understand how different data structures work by visualizing the structure in a graphical interface.',
    logo: '',
    title: 'DS Visualiser',
    downloads: '',
    proxy: 'http://localhost:4050/dataStructures' //change the proxy accordingly

  },
  {
    id: '1efecb2bf6a51def9869ab0f',
    createdAt: '04/04/2019',
    description: '',
    logo: '',
    title: 'Nameaz',
    downloads: '',
    proxy: ''
  },
  {
    id: '1ed68149f65fbc6089b5fd07',
    createdAt: '04/04/2019',
    description: '',
    logo: '',
    title: 'Namebz',
    downloads: '',
    proxy: ''
  },
  {
    id: '5dab321376eff6177407e887',
    createdAt: '04/04/2019',
    description: '',
    logo: '',
    title: 'Namecz',
    downloads: '',
    proxy: ''
  }
];

const Page = () => (
  <>
    <Head>
      <title>
        Learn and Practice | Dal-Go
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
                Learn and Practice
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
              >
                {companies.map((company) => (
                  <Button
                    key={company.id}
                    variant="contained"
                    startIcon={<PlusIcon />}
                    onClick={() => {

                      window.open(company.proxy, '_blank');//integration
                      // Handle button click for the company
                    }}
                  >
                    {company.title}
                  </Button>
                ))}
              </Stack>
            </Stack>
            <div></div>
          </Stack>
          <CompaniesSearch />
          <Grid container spacing={3}>
            {companies.map((company) => (
              <Grid xs={12} md={6} lg={4} key={company.id}>
                <CompanyCard company={company} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Pagination count={3} size="small" />
          </Box>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;