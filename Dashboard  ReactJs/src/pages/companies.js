import Head from 'next/head';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Pagination,
  Stack,
  Typography,
  Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
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
    proxy: 'http://localhost:4050/' //change the proxy accordingly

  }
];


const CompanyCard = ({ company }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box mb={2} textAlign="center">
        <Typography variant="h6" sx={{ fontSize: '1.2rem' }}>
          {company.title}
        </Typography>
      </Box>
      <Typography>{company.description}</Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: 'center' }}>
      <Button
        variant="contained"
        startIcon={<PlusIcon />}
        onClick={() => {
          window.open(company.proxy, '_blank');
          // Handle button click for the company
        }}
        sx={{ width: '100%', mx: 'auto' }}
      >
        {company.title}
      </Button>
    </CardActions>
  </Card>
);


const Page = () => (
  <>
    <Head>
      <title>Learn and Practice | Dal-Go</title>
    </Head>
    <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Typography variant="h4">Learn and Practice</Typography>
          <CompaniesSearch />
          <Grid container spacing={3}>
            {companies.map((company) => (
              <Grid item xs={12} md={6} lg={4} key={company.id}>
                <CompanyCard company={company} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination count={3} size="small" />
          </Box>
        </Stack>
      </Container>
    </Box>
  </>
);
Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
