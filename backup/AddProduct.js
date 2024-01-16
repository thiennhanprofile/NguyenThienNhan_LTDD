import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';

const AddProduct = ({ navigation }) => {
    const [tenSP, settenSP] = useState('');
    const [gia, setgia] = useState(0);
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');


    const SaveProduct = async () => {
        if (!imageUrl) {
            alert('Vui lòng nhập URL hình ảnh');
            return;
        }
        try {
            // Gửi request lên API để thêm sản phẩm
            const response = await fetch('https://65a4e55452f07a8b4a3de282.mockapi.io/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: tenSP,
                    price: gia,
                    image: imageUrlToSend,
                }),
            });

            if (response.ok) {
                alert('Thêm sản phẩm thành công');
            } else {
                alert('Đã xảy ra lỗi khi thêm sản phẩm');
            }
        } catch (error) {
            console.error('Lỗi:', error);
        }
    };

    return (
        <View>
            <Text>Thêm SP</Text>
            <TextInput placeholder="Tên SP" onChangeText={(txt) => settenSP(txt)} />
            <TextInput placeholder="Giá tiền" onChangeText={(txt) => setgia(txt)} />
            {image && <Image source={{ uri: image.uri }} style={{ width: '100%', height: 150 }} />}
            <TextInput
                placeholder="URL hình ảnh"
                onChangeText={(url) => setImageUrl(url)}
                value={imageUrl}
            />
            <Button title="Lưu" onPress={SaveProduct} />
        </View>
    );
};

export default AddProduct;
