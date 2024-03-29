import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import Button from 'react-bootstrap/Button'

const ProductDetail = () => {
	let { id } = useParams()
	const [product, setProduct] = useState(null)
	const getProductDetail = async () => {
		let url = `https://my-json-server.typicode.com/chaeneeee/h-msite/products/${id}`
		let response = await fetch(url)
		let data = await response.json()
		setProduct(data)
	}
	useEffect(() => {
		getProductDetail()
	}, [])
	return (
		<Container>
			<Row>
				<Col className="productImg">
					<img src={product?.img} alt="" />
				</Col>
				<Col>
					<div>{product?.title}</div>
					<div>₩{product?.price}</div>
					<DropdownButton id="dropdown-basic-button" title="사이즈 선택">
						<Dropdown.Item href="#/action-1">S</Dropdown.Item>
						<Dropdown.Item href="#/action-2">M</Dropdown.Item>
						<Dropdown.Item href="#/action-3">L</Dropdown.Item>
					</DropdownButton>
					<Button variant="dark">추가</Button>
				</Col>
			</Row>
		</Container>
	)
}

export default ProductDetail
