import { Text } from "react-native";
import { View, StyleSheet, Button, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';


const AnalyticsScreen = () => {
    const [pagesRead, setPagesRead] = useState(250);
    const [timeSpentReading, setTimeSpentReading] = useState('15 hours');
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    const handleTimePeriodChange = (timePeriod) => {
      // Update the sample data based on the selected time period
      if (timePeriod === 'week') {
        setPagesRead(100);
        setTimeSpentReading('8 hours');
      } else if (timePeriod === 'month') {
        setPagesRead(500);
        setTimeSpentReading('20 hours');
      } else if (timePeriod === 'threeMonths') {
        setPagesRead(1000);
        setTimeSpentReading('40 hours');
      }
    };
  
    const handleCategoryPress = (category) => {
        setSelectedCategory(category);
      };
    
      const renderBookItem = ({ item }) => (
        <View style={styles.bookItem}>
          <View style={styles.bookImagePlaceholder} />
          <View style={styles.bookDetails}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
          </View>
        </View>
      );
    
      const categoryData = [
        { id: '1', title: 'Science' },
        { id: '2', title: 'Literature' },
        { id: '3', title: 'Fiction' },
        { id: '4', title: 'Music' },
      ];
    
      const bookData = {
        Science: [
          { id: '1', title: 'Book 1', author: 'Author 1' },
          { id: '2', title: 'Book 2', author: 'Author 2' },
          // Add more books...
        ],
        Literature: [
          { id: '1', title: 'Book A', author: 'Author A' },
          { id: '2', title: 'Book B', author: 'Author B' },
          { id: '3', title: 'Book C', author: 'Author C' },
          // Add more books...
        ],
        Fiction: [
            { id: '1', title: 'Book 1', author: 'Author 1' },
            { id: '2', title: 'Book 2', author: 'Author 2' },
        ],
        Music: [
            { id: '1', title: 'Book 1', author: 'Author 1' },
            { id: '2', title: 'Book 2', author: 'Author 2' },
        ],
      };
    
      const bookList = selectedCategory ? bookData[selectedCategory] : [];
    
      return (
        <ScrollView>
        <View style={styles.container}>
          <View style={styles.rectangle}>
            <View style={styles.userIcon}>
              {/* You can replace this with your user icon */}
              <Text>User Icon</Text>
            </View>
            <Text style={styles.pagesText}>{pagesRead} pages read</Text>
            <Text style={styles.timeText}>{timeSpentReading} spent reading</Text>
          </View>

          <View style={styles.timePeriodContainer}>
                <Text style={styles.timePeriodText}>Select time period:</Text>
                <View style={styles.timePeriodOptions}>
                <View style={styles.timePeriodButton}>
                    <Button
                    title="Last week"
                    onPress={() => handleTimePeriodChange('week')}
                    />
                </View>
                <View style={styles.timePeriodButton}>
                    <Button
                    title="Last month"
                    onPress={() => handleTimePeriodChange('month')}
                    />
                </View>
                <View style={styles.timePeriodButton}>
                    <Button
                    title="Last 3 months"
                    onPress={() => handleTimePeriodChange('threeMonths')}
                    />
                </View>
                </View>
            </View>
    
          <View style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>Categories:</Text>
            <View style={styles.categoryButtons}>
              {categoryData.map((category) => (
                 <View style={styles.categoryButton} key={category.id}>
                <Button
                  title={category.title}
                  onPress={() => handleCategoryPress(category.title)}
                />
                 </View>
              ))}
            </View>
          </View>
    
          {selectedCategory && (
            <View style={styles.booksContainer}>
                <Text style={styles.booksTitle}>Books in {selectedCategory} category:</Text>
                <FlatList
                    data={bookList}
                    renderItem={renderBookItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
          )}
        </View>
        </ScrollView>
      );
    };
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        marginTop: 20,
      },
      rectangle: {
        backgroundColor: 'white',
        width: 300,
        height: 200,
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      userIcon: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#C0C0C0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      pagesText: {
        fontSize: 20,
        marginBottom: 10,
      },
      timeText: {
        fontSize: 16,
      },
      timePeriodContainer: {
        marginTop: 20,
        alignItems: 'center',
      },
      timePeriodText: {
        fontSize: 16,
        marginBottom: 10,
      },
      timePeriodOptions: {
        flexDirection: 'row',
        marginTop: 10,
      },
      timePeriodButton: {
        margin: 8, 
      },
      categoryTitle: {
        fontSize: 16,
        marginBottom: 10,
        marginTop: 15,
      },
      categoryButtons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginHorizontal: -500,
        marginTop: 15,
      },
      categoryButton: {
        marginHorizontal: 5,
        marginBottom: 10,
      },
      booksContainer: {
        marginTop: 20,
        width: 300,
      },
      booksTitle: {
        fontSize: 16,
        marginBottom: 10,
      },
      bookItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      bookImagePlaceholder: {
        width: 80,
        height: 100,
        backgroundColor: '#C0C0C0',
        marginRight: 10,
      },
      bookDetails: {
        flex: 1,
      },
      bookTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      bookAuthor: {
        fontSize: 14,
      },
      scrollContainer: {
        alignItems: 'center',
      },
});

export {AnalyticsScreen};