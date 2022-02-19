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
import Chip from '@mui/material/Chip';

function createOrderData(
  id,
  status,
  productName,
  productUnit,
  productAmount,
  deliveryAmount,
  isOutOfStock,
  recipientName,
  recipientContact1,
  recipientAddress1,
  recipientZipcode1,
  additionalInfo
) {
  return {
    id,
    status,
    productName,
    productUnit,
    productAmount,
    deliveryAmount,
    isOutOfStock,
    recipientName,
    recipientContact1,
    recipientAddress1,
    recipientZipcode1,
    additionalInfo,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  const getChipColored = value => {
    if (value.includes('성공') || value.includes('완료')) return 'success';
    if (value.includes('대기')) return 'warning';
    if (
      value.includes('실패') ||
      value.includes('취소') ||
      value.includes('부족')
    )
      return 'error';
  };

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
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.productName}</TableCell>
        <TableCell>{row.productUnit}</TableCell>
        <TableCell>{row.productAmount}</TableCell>
        <TableCell>{row.deliveryAmount}</TableCell>
        <TableCell>
          <Chip
            label={row.isOutOfStock}
            color={getChipColored(row.isOutOfStock)}
          />
        </TableCell>
        <TableCell>{row.recipientName}</TableCell>
        <TableCell>{row.recipientContact1}</TableCell>
        <TableCell sx={{ maxWidth: '200px' }}>
          {row.recipientAddress1}
        </TableCell>
        <TableCell sx={{ minWidth: '100px' }}>
          {row.recipientZipcode1}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h6"
                sx={{ my: 1, fontSize: '18px', fontWeight: '600' }}
              >
                주문 관련 추가 정보
              </Typography>

              <Table size="small" aria-label="additional order info">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ width: '120px' }}>주문 번호</TableCell>
                    <TableCell sx={{ width: '105px' }}>상품 ID</TableCell>
                    <TableCell sx={{ width: '90px' }}>상품 코드</TableCell>
                    <TableCell>주문명</TableCell>
                    <TableCell>주문서 양식</TableCell>
                    <TableCell>주문자 이름</TableCell>
                    <TableCell>주문자 번호</TableCell>
                    <TableCell>수량 변경</TableCell>
                    <TableCell>출고 취소(상품)</TableCell>
                    <TableCell>출고 취소(주문)</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.additionalInfo.map(info => (
                    <TableRow key={info.number}>
                      <TableCell component="th" scope="row">
                        {info.number}
                      </TableCell>
                      <TableCell>{info.productId}</TableCell>
                      <TableCell>{info.productCode}</TableCell>
                      <TableCell>{info.name}</TableCell>
                      <TableCell>{info.channel}</TableCell>
                      <TableCell>{info.senderName}</TableCell>
                      <TableCell>{info.senderContact}</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>

            <Box sx={{ mb: 2, p: 2 }}>
              <Typography
                variant="h6"
                sx={{ mb: 1, fontSize: '18px', fontWeight: '600' }}
              >
                배송 관련 추가 정보
              </Typography>

              <Table size="small" aria-label="additional delivery info">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ width: '120px' }}>주문 번호</TableCell>
                    <TableCell sx={{ width: '105px' }}>상품 ID</TableCell>
                    <TableCell sx={{ width: '90px' }}>상품 코드</TableCell>
                    <TableCell>출고 창고명</TableCell>
                    <TableCell>택배사명</TableCell>
                    <TableCell>수취인 번호 2</TableCell>
                    <TableCell sx={{ maxWidth: '200px' }}>
                      수취인 주소 2
                    </TableCell>
                    <TableCell sx={{ minWidth: '100px' }}>우편번호 2</TableCell>
                    <TableCell sx={{ minWidth: '150px' }}>메모</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {row.additionalInfo.map(info => (
                    <TableRow key={info.number}>
                      <TableCell component="th" scope="row">
                        {info.number}
                      </TableCell>
                      <TableCell>{info.productId}</TableCell>
                      <TableCell>{info.productCode}</TableCell>
                      <TableCell>{info.deliveryStorage}</TableCell>
                      <TableCell>{info.deliveryCompany}</TableCell>
                      <TableCell>{row.recipientContact2}</TableCell>
                      <TableCell sx={{ maxWidth: '200px' }}>
                        {row.recipientAddress2}
                      </TableCell>
                      <TableCell sx={{ minWidth: '100px' }}>
                        {row.recipientZipcode2}
                      </TableCell>
                      <TableCell sx={{ minWidth: '150px' }}>
                        배송 메시지: {info.deliveryMemo}
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
    status: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productUnit: PropTypes.number.isRequired,
    productAmount: PropTypes.number.isRequired,
    deliveryAmount: PropTypes.number.isRequired,
    isOutOfStock: PropTypes.string.isRequired,
    recipientName: PropTypes.string.isRequired,
    recipientContact1: PropTypes.string.isRequired,
    recipientAddress1: PropTypes.string.isRequired,
    recipientZipcode1: PropTypes.number,
    additionalInfo: PropTypes.arrayOf(
      PropTypes.shape({
        number: PropTypes.string.isRequired,
        productId: PropTypes.string.isRequired,
        productCode: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        channel: PropTypes.string.isRequired,
        senderName: PropTypes.string,
        senderContact: PropTypes.string,
        deliveryStorage: PropTypes.string.isRequired,
        deliveryCompany: PropTypes.string,
        recipientContact2: PropTypes.string,
        recipientAddress2: PropTypes.string,
        recipientZipcode2: PropTypes.number,
        deliveryMemo: PropTypes.string,
      })
    ),
  }),
};

const ROWS = [
  createOrderData(
    1,
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    1,
    '출고 주문 완료',
    '김재원',
    '010-0000-0000',
    '서울시 서대문구 연세로 50, 현대 오피스텔 505동 5005호',
    '03722',
    [
      {
        number: '0000921944385',
        productId: 'DNLQ00051',
        productCode: 19071,
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    2,
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    1,
    '출고 주문 완료',
    '김재원',
    '010-0000-0000',
    '서울시 서대문구 연세로 50, 현대 오피스텔 505동 5005호',
    '03722',
    [
      {
        number: '0000921944385',
        productId: 'DNLQ00051',
        productCode: 19071,
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    3,
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    1,
    '출고 주문 완료',
    '김재원',
    '010-0000-0000',
    '서울시 서대문구 연세로 50, 현대 오피스텔 505동 5005호',
    '03722',
    [
      {
        number: '0000921944385',
        productId: 'DNLQ00051',
        productCode: 19071,
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    4,
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    1,
    '출고 주문 완료',
    '김재원',
    '010-0000-0000',
    '서울시 서대문구 연세로 50, 현대 오피스텔 505동 5005호',
    '03722',
    [
      {
        number: '0000921944385',
        productId: 'DNLQ00051',
        productCode: 19071,
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    5,
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    1,
    '출고 주문 대기',
    '김재원',
    '010-0000-0000',
    '서울시 서대문구 연세로 50, 현대 오피스텔 505동 5005호',
    '03722',
    [
      {
        number: '0000921944385',
        productId: 'DNLQ00051',
        productCode: 19071,
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    6,
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    1,
    '출고 주문 대기',
    '김재원',
    '010-0000-0000',
    '서울시 서대문구 연세로 50, 현대 오피스텔 505동 5005호',
    '03722',
    [
      {
        number: '0000921944385',
        productId: 'DNLQ00051',
        productCode: 19071,
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    7,
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    1,
    '출고 주문 대기',
    '김재원',
    '010-0000-0000',
    '서울시 서대문구 연세로 50, 현대 오피스텔 505동 5005호',
    '03722',
    [
      {
        number: '0000921944385',
        productId: 'DNLQ00051',
        productCode: 19071,
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    8,
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    1,
    '출고 주문 대기',
    '김재원',
    '010-0000-0000',
    '서울시 서대문구 연세로 50, 현대 오피스텔 505동 5005호',
    '03722',
    [
      {
        number: '0000921944385',
        productId: 'DNLQ00051',
        productCode: 19071,
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    9,
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    1,
    '재고 부족 취소',
    '김재원',
    '010-0000-0000',
    '서울시 서대문구 연세로 50, 현대 오피스텔 505동 5005호',
    '03722',
    [
      {
        number: '0000921944385',
        productId: 'DNLQ00051',
        productCode: 19071,
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    10,
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    1,
    '재고 부족 취소',
    '김재원',
    '010-0000-0000',
    '서울시 서대문구 연세로 50, 현대 오피스텔 505동 5005호',
    '03722',
    [
      {
        number: '0000921944385',
        productId: 'DNLQ00051',
        productCode: 19071,
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    11,
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    1,
    '재고 부족 취소',
    '김재원',
    '010-0000-0000',
    '서울시 서대문구 연세로 50, 현대 오피스텔 505동 5005호',
    '03722',
    [
      {
        number: '0000921944385',
        productId: 'DNLQ00051',
        productCode: 19071,
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
        deliveryStorage: '(창고 미지정)',
      },
    ]
  ),
  createOrderData(
    12,
    '주문명 세트 지정',
    '에이스 크래커 150g',
    1,
    1,
    1,
    '재고 부족 취소',
    '김재원',
    '010-0000-0000',
    '서울시 서대문구 연세로 50, 현대 오피스텔 505동 5005호',
    '03722',
    [
      {
        number: '0000921944385',
        productId: 'DNLQ00051',
        productCode: 19071,
        name: '[특별할인] 해태과자 선물세트 1세트',
        channel: '일반 온라인 판매',
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
        subheader="데이터 출처: 테스트_콜로세움주문서_test.xls (엑셀)"
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
                <TableCell>매핑 상태</TableCell>
                <TableCell>상품명</TableCell>
                <TableCell>주문 단위</TableCell>
                <TableCell>주문 수량</TableCell>
                <TableCell>출고 수량</TableCell>
                <TableCell>재고 부족 여부</TableCell>
                <TableCell>수취인</TableCell>
                <TableCell>수취인 번호 1</TableCell>
                <TableCell sx={{ maxWidth: '200px' }}>수취인 주소 1</TableCell>
                <TableCell sx={{ minWidth: '100px' }}>우편번호 1</TableCell>
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
