import { useState } from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function createOrderData(
  id,
  number,
  status,
  productName,
  productAmount,
  deliveryAmount,
  isOutOfStock,
  recipientName,
  recipientContact,
  recipientAddress,
  additionalInfo
) {
  return {
    id,
    number,
    status,
    productName,
    productAmount,
    deliveryAmount,
    isOutOfStock,
    recipientName,
    recipientContact,
    recipientAddress,
    additionalInfo,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell>{row.number}</TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.productName}</TableCell>
        <TableCell>{row.productAmount}</TableCell>
        <TableCell>{row.deliveryAmount}</TableCell>
        <TableCell>{row.isOutOfStock}</TableCell>
        <TableCell>{row.recipientName}</TableCell>
        <TableCell>{row.recipientContact}</TableCell>
        <TableCell sx={{ maxWidth: '250px' }}>{row.recipientAddress}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h6"
                sx={{ my: 1, fontSize: '18px', fontWeight: '600' }}
              >
                주문별 세부 정보
              </Typography>

              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ maxWidth: '120px' }}>주문명</TableCell>
                    <TableCell>주문서 양식</TableCell>
                    <TableCell>상품 ID</TableCell>
                    <TableCell>상품 코드</TableCell>
                    <TableCell>주문 단위</TableCell>
                    <TableCell>출고 창고명</TableCell>
                    <TableCell>택배사명</TableCell>
                    <TableCell>수취인 우편번호</TableCell>
                    <TableCell sx={{ minWidth: '180px' }}>메모</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.additionalInfo.map(info => (
                    <TableRow key={info.productId}>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ maxWidth: '120px' }}
                      >
                        {info.name}
                      </TableCell>
                      <TableCell>{info.channel}</TableCell>
                      <TableCell>{info.productId}</TableCell>
                      <TableCell>{info.productCode}</TableCell>
                      <TableCell>{info.productUnit}</TableCell>
                      <TableCell>{info.deliveryStorage}</TableCell>
                      <TableCell>{info.deliveryCompany}</TableCell>
                      <TableCell>{info.recipientZipcode}</TableCell>
                      <TableCell sx={{ minWidth: '180px' }}>
                        {info.deliveryMemo}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    number: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productAmount: PropTypes.number.isRequired,
    deliveryAmount: PropTypes.number.isRequired,
    isOutOfStock: PropTypes.string.isRequired,
    recipientName: PropTypes.string.isRequired,
    recipientContact: PropTypes.string.isRequired,
    recipientAddress: PropTypes.string.isRequired,
    additionalInfo: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        channel: PropTypes.string.isRequired,
        productId: PropTypes.string.isRequired,
        productCode: PropTypes.number.isRequired,
        productUnit: PropTypes.number.isRequired,
        deliveryStorage: PropTypes.string.isRequired,
        deliveryCompany: PropTypes.string,
        deliveryMemo: PropTypes.string,
        senderName: PropTypes.string,
        senderContact: PropTypes.string,
        recipientZipcode: PropTypes.number,
      })
    ),
  }),
};

const ROWS = [
  createOrderData(
    1,
    '0000921944385',
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    '출고 주문 대기',
    '김재원',
    '010-0000-0000',
    '서울특별시 서대문구 연세로 50, 현대 아이파크 오피스텔 505동 5005호',
    [
      {
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        productId: 'DNLQ00051',
        productCode: 19071,
        productUnit: 1,
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    2,
    '0000921944385',
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    '출고 주문 대기',
    '김재원',
    '010-0000-0000',
    '서울특별시 서대문구 연세로 50, 현대 아이파크 오피스텔 505동 5005호',
    [
      {
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        productId: 'DNLQ00051',
        productCode: 19071,
        productUnit: 1,
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    3,
    '0000921944385',
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    '출고 주문 대기',
    '김재원',
    '010-0000-0000',
    '서울특별시 서대문구 연세로 50, 현대 아이파크 오피스텔 505동 5005호',
    [
      {
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        productId: 'DNLQ00051',
        productCode: 19071,
        productUnit: 1,
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    4,
    '0000921944385',
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    '출고 주문 대기',
    '김재원',
    '010-0000-0000',
    '서울특별시 서대문구 연세로 50, 현대 아이파크 오피스텔 505동 5005호',
    [
      {
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        productId: 'DNLQ00051',
        productCode: 19071,
        productUnit: 1,
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    5,
    '0000921944385',
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    '출고 주문 대기',
    '김재원',
    '010-0000-0000',
    '서울특별시 서대문구 연세로 50, 현대 아이파크 오피스텔 505동 5005호',
    [
      {
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        productId: 'DNLQ00051',
        productCode: 19071,
        productUnit: 1,
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    6,
    '0000921944385',
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    '출고 주문 대기',
    '김재원',
    '010-0000-0000',
    '서울특별시 서대문구 연세로 50, 현대 아이파크 오피스텔 505동 5005호',
    [
      {
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        productId: 'DNLQ00051',
        productCode: 19071,
        productUnit: 1,
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    7,
    '0000921944385',
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    '출고 주문 대기',
    '김재원',
    '010-0000-0000',
    '서울특별시 서대문구 연세로 50, 현대 아이파크 오피스텔 505동 5005호',
    [
      {
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        productId: 'DNLQ00051',
        productCode: 19071,
        productUnit: 1,
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    8,
    '0000921944385',
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    '출고 주문 대기',
    '김재원',
    '010-0000-0000',
    '서울특별시 서대문구 연세로 50, 현대 아이파크 오피스텔 505동 5005호',
    [
      {
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        productId: 'DNLQ00051',
        productCode: 19071,
        productUnit: 1,
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    9,
    '0000921944385',
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    '출고 주문 대기',
    '김재원',
    '010-0000-0000',
    '서울특별시 서대문구 연세로 50, 현대 아이파크 오피스텔 505동 5005호',
    [
      {
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        productId: 'DNLQ00051',
        productCode: 19071,
        productUnit: 1,
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    10,
    '0000921944385',
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    '출고 주문 대기',
    '김재원',
    '010-0000-0000',
    '서울특별시 서대문구 연세로 50, 현대 아이파크 오피스텔 505동 5005호',
    [
      {
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        productId: 'DNLQ00051',
        productCode: 19071,
        productUnit: 1,
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    11,
    '0000921944385',
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    '출고 주문 대기',
    '김재원',
    '010-0000-0000',
    '서울특별시 서대문구 연세로 50, 현대 아이파크 오피스텔 505동 5005호',
    [
      {
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        productId: 'DNLQ00051',
        productCode: 19071,
        productUnit: 1,
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    12,
    '0000921944385',
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    '출고 주문 대기',
    '김재원',
    '010-0000-0000',
    '서울특별시 서대문구 연세로 50, 현대 아이파크 오피스텔 505동 5005호',
    [
      {
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        productId: 'DNLQ00051',
        productCode: 19071,
        productUnit: 1,
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
];

export default function RequestList() {
  return (
    <Card component="section" sx={{ mt: 2, p: 1 }}>
      <CardHeader
        variant="h5"
        title="출고 요청서 매핑 리스트"
        subheader="데이터 출처: (엑셀) 테스트_콜로세움주문서_test.xls"
        sx={{ mb: -1 }}
        titleTypographyProps={{
          fontSize: '21px',
          fontWeight: '600',
          lineHeight: '1.8',
        }}
      />

      <CardContent>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table" size="small">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>순번</TableCell>
                <TableCell>주문 번호</TableCell>
                <TableCell>매핑 상태</TableCell>
                <TableCell>상품명</TableCell>
                <TableCell>주문 수량</TableCell>
                <TableCell>출고 수량</TableCell>
                <TableCell>재고 부족 여부</TableCell>
                <TableCell>수취인</TableCell>
                <TableCell>수취인 번호</TableCell>
                <TableCell sx={{ maxWidth: '250px' }}>수취인 주소</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {ROWS.map(row => (
                <Row key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
