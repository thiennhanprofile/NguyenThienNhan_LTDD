import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';

const AddProduct = ({ navigation }) => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const SaveProduct = async () => {
        if ( !username || !password) {
            alert('Vui lòng nhập đầy đủ thông tin');
            return;
        }

        try {
            // Gửi request lên API để thêm sản phẩm và tài khoản
            const response = await fetch('https://65a4e55452f07a8b4a3de282.mockapi.io/api/account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    
                    username: username,
                    password: password,
                }),
            });

            if (response.ok) {
                alert('Thêm sản phẩm và tài khoản thành công');
            } else {
                alert('Đã xảy ra lỗi khi thêm sản phẩm và tài khoản');
            }
        } catch (error) {
            console.error('Lỗi:', error);
        }
    };

    return (
        <View> 

            
            
            <TextInput
                placeholder="Tên đăng nhập"
                onChangeText={(txt) => setUsername(txt)}
            />
            <TextInput
                placeholder="Mật khẩu"
                onChangeText={(txt) => setPassword(txt)}
                secureTextEntry
            />
            <Button title="Lưu" onPress={SaveProduct} />
        </View>
    );
};

export default AddProduct;
