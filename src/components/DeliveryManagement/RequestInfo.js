import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const DELIVERY_STATUS = ['출고 요청', '출고 대기', '출고 완료', '배송 완료'];
const DELIVERY_TYPES = [
  '아침(08:00) 출고',
  '오전(10:00) 출고',
  '정오(12:00) 출고',
  '오후(14:00) 출고',
  '오후(16:00) 출고',
];

function getStyles(type, deliveryType, theme) {
  return {
    fontWeight:
      deliveryType.indexOf(type) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function RequestInfo() {
  const theme = useTheme();
  const [deliveryStatus, setDeliveryStatus] = useState(DELIVERY_STATUS[0]);
  const [deliveryType, setDeliveryType] = useState(DELIVERY_TYPES[1]);

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'deliveryStatus') {
      setDeliveryStatus(value);
    } else if (name === 'deliveryType') {
      setDeliveryType(value);
    }
  };

  return (
    <Card component="section" sx={{ mt: 2, p: 1 }}>
      <CardHeader
        variant="h4"
        title="출고 신청 정보"
        sx={{ mt: 1, mb: -2 }}
        titleTypographyProps={{
          fontSize: '24px',
          fontWeight: '600',
          lineHeight: '1.4',
        }}
      />

      <CardContent>
        <Grid container>
          <Grid container item xs={5.5} spacing={4} sx={{ px: 1 }}>
            <Grid
              item
              sx={{ fontSize: '16px', fontWeight: '600', lineHeight: 3.5 }}
            >
              <label>
                전표 번호
                <TextField
                  defaultValue="OODNLQC001202201170003"
                  InputProps={{ readOnly: true }}
                  size="small"
                  margin="dense"
                  sx={{ ml: 2, width: '275px' }}
                />
              </label>
            </Grid>
            <Grid
              item
              sx={{ fontSize: '16px', fontWeight: '600', lineHeight: 3.5 }}
            >
              <label>
                요청 일자
                <TextField
                  defaultValue="2022-01-18"
                  InputProps={{ readOnly: true }}
                  size="small"
                  margin="dense"
                  sx={{ ml: 2, width: '125px' }}
                />
              </label>
            </Grid>
          </Grid>

          <Grid container item xs={6.5} spacing={4} sx={{ px: 1 }}>
            <Grid
              item
              sx={{ fontSize: '16px', fontWeight: '600', lineHeight: 3.5 }}
            >
              <label>
                요청 업체
                <TextField
                  defaultValue="콜로세움 코퍼레이션"
                  InputProps={{ readOnly: true }}
                  size="small"
                  margin="dense"
                  sx={{ ml: 2, width: '175px' }}
                />
              </label>
            </Grid>
            <Grid
              item
              sx={{ fontSize: '16px', fontWeight: '600', lineHeight: 3.5 }}
            >
              <label>
                요청 담당
                <TextField
                  defaultValue="support@colosseum.kr"
                  InputProps={{ readOnly: true }}
                  size="small"
                  margin="dense"
                  sx={{ ml: 2, width: '225px' }}
                />
              </label>
            </Grid>
          </Grid>
        </Grid>

        <Grid container>
          <Grid container item xs={6.5} spacing={4} sx={{ px: 1 }}>
            <Grid
              item
              sx={{ fontSize: '16px', fontWeight: '600', lineHeight: 3.5 }}
            >
              <label>
                출고 방식
                <TextField
                  defaultValue="택배"
                  InputProps={{ readOnly: true }}
                  size="small"
                  margin="dense"
                  sx={{ ml: 2, width: '100px' }}
                />
              </label>
            </Grid>
            <Grid
              item
              sx={{ fontSize: '16px', fontWeight: '600', lineHeight: 3.5 }}
            >
              <label>
                출고 상태
                <Select
                  defaultValue={deliveryStatus}
                  onChange={handleChange}
                  value={deliveryStatus}
                  name="deliveryStatus"
                  size="small"
                  margin="dense"
                  sx={{ ml: 2, width: '125px' }}
                >
                  {DELIVERY_STATUS.map(status => (
                    <MenuItem
                      key={status}
                      value={status}
                      style={getStyles(status, deliveryStatus, theme)}
                    >
                      {status}
                    </MenuItem>
                  ))}
                </Select>
              </label>
            </Grid>
            <Grid
              item
              sx={{ fontSize: '16px', fontWeight: '600', lineHeight: 3.5 }}
            >
              <label>
                출고 유형
                <Select
                  defaultValue={deliveryType}
                  onChange={handleChange}
                  value={deliveryType}
                  name="deliveryType"
                  size="small"
                  margin="dense"
                  sx={{ ml: 2, width: '175px' }}
                >
                  {DELIVERY_TYPES.map(type => (
                    <MenuItem
                      key={type}
                      value={type}
                      style={getStyles(type, deliveryType, theme)}
                    >
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </label>
            </Grid>
          </Grid>

          <Grid container item xs={5.5} spacing={4} sx={{ px: 1 }}>
            <Grid
              item
              sx={{ fontSize: '16px', fontWeight: '600', lineHeight: 3.5 }}
            >
              <label>
                파일명
                <TextField
                  defaultValue="테스트_콜로세움주문서_test.xls"
                  InputProps={{ readOnly: true }}
                  size="small"
                  margin="dense"
                  sx={{ ml: 2, width: '275px' }}
                />
              </label>
            </Grid>
            <Grid item sx={{ lineHeight: 3.3 }}>
              <Button
                variant="contained"
                sx={{ width: '105px', fontSize: '16px', fontWeight: 'bold' }}
              >
                변경 완료
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
